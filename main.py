from utils import read_video, save_video, save_frames_as_img
from trackers import Tracker
import cv2
import os
import numpy as np
from team_assigner import TeamAssigner
from player_ball_assigner import PlayerBallAssigner
from camera_movement_estimator import CameraMovementEstimator
from view_transformer import ViewTransformer
from speed_distance_estimator import SpeedDistanceEstimator


def main():
    with_image = False
    set_tracker = True
    set_obj_pos = True
    set_cam_estimator = False
    set_view_transform = False
    set_ball_interpolation = False
    set_speed_dist_estimator = False
    set_team_assigner = False
    set_ball_acquisition = False
    set_draw_tracks = True
    set_draw_camera_movement = False
    set_draw_speed_dist = False
    set_save_video = True

    file_name = "ff-01-08-2024-1"
    dir = "input_videos/"
    file_ext = ".mp4"
    full_path = dir + file_name + file_ext

    # Read Video
    video_frames = read_video(full_path, 5000)

    # Print some frames of the video (for possible training dataset)
    if with_image:
        print("Saving some frames as images..")
        image_folder = "training/fun-futsal-dataset"
        save_frames_as_img(image_folder, file_name, video_frames, 100)

    # Initialize Tracker
    if set_tracker:
        print("Initializing Tracker..")
        tracker = Tracker("models/bundesliga/bestm.pt")

        tracks = tracker.get_object_tracks(
            video_frames,
            read_from_stub=True,
            stub_path=("stubs/tracks_" + file_name + ".pkl"),
            batch_size=20,
        )

    # Get object positions
    if set_obj_pos:
        print("Getting object positions..")
        tracker.add_position_to_tracks(tracks)

    # Camera movement estimator
    if set_cam_estimator:
        print("Handling camera movement estimator..")
        camera_movement_estimator = CameraMovementEstimator(video_frames[0])
        camera_movement_per_frame = camera_movement_estimator.get_camera_movement(
            video_frames,
            read_from_stub=True,
            stub_path="stubs/camera_movement_" + file_name + ".pkl",
        )
        camera_movement_estimator.add_adjust_positions_to_tracks(
            tracks, camera_movement_per_frame
        )

    # View Transformer
    if set_view_transform:
        print("Handling view transformer..")
        view_transformer = ViewTransformer()
        view_transformer.add_transformed_position_to_tracks(tracks)

    # Interpolate ball positions
    if set_ball_interpolation:
        print("Handling ball interpolation..")
        tracks["ball"] = tracker.interpolate_ball_positions(tracks["ball"])

    # Speed and distance estimator
    if set_speed_dist_estimator:
        print("Handling speed and distance estimator..")
        speed_distance_estimator = SpeedDistanceEstimator()
        speed_distance_estimator.add_speed_and_distance_to_tracks(tracks)

    # Assign player teams
    if set_team_assigner:
        print("Handling players to assigned teams..")
        team_assigner = TeamAssigner()
        team_assigner.assign_team_color(video_frames[0], tracks["players"][0])

        for frame_num, player_track in enumerate(tracks["players"]):
            for player_id, track in player_track.items():
                team = team_assigner.get_player_team(
                    video_frames[frame_num], track["bbox"], player_id
                )
                tracks["players"][frame_num][player_id]["team"] = team
                tracks["players"][frame_num][player_id]["team_color"] = (
                    team_assigner.team_colors[team]
                )

    # Assign ball acquisition
    if set_ball_acquisition:
        print("Handling ball acquisition..")
        player_assigner = PlayerBallAssigner()
        team_ball_control = []
        for frame_num, player_track in enumerate(tracks["players"]):
            ball_bbox = tracks["ball"][frame_num][1]["bbox"]
            assigned_player = player_assigner.assign_ball_to_player(
                player_track, ball_bbox
            )
            if assigned_player != -1:
                tracks["players"][frame_num][assigned_player]["has_ball"] = True
                team_ball_control.append(
                    tracks["players"][frame_num][assigned_player]["team"]
                )
            else:
                team_ball_control.append(team_ball_control[-1])
            team_ball_control = np.array(team_ball_control)

    # Draw Output
    print("---------------------------")
    ## Draw object tracks
    if not set_ball_acquisition:
        team_ball_control = None
    if set_draw_tracks:
        print("Drawing object tracking..")
        output_video_frames = tracker.draw_annotations(
            video_frames, tracks, team_ball_control
        )

    ## Draw camera movement
    if set_draw_camera_movement:
        print("Drawing camera movement statistics..")
        output_video_frames = camera_movement_estimator.draw_camera_movement(
            output_video_frames, camera_movement_per_frame
        )

    ## Draw speed and distance
    if set_draw_speed_dist:
        print("Drawing speed and distances..")
        speed_distance_estimator.draw_speed_and_distance(output_video_frames, tracks)

    # Save Video
    if set_save_video:
        save_video(output_video_frames, "output_videos/" + file_name + ".avi")
        print("Video saved! Process is finished!")


if __name__ == "__main__":
    main()
