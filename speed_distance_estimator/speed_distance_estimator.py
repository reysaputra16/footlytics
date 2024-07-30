import cv2
import sys

sys.path.append("../")
from utils import measure_distance, get_foot_position


class SpeedDistanceEstimator:
    def __init__(self):
        self.frame_window = 5
        self.frame_rate = 24

    def add_speed_and_distance_to_tracks(self, tracks):
        total_distance = {}

        for object, object_tracks in tracks.items():
            if object == "ball" or object == "referees":
                continue
            number_of_frames = len(object_tracks)
            # Measure according to the given frame window
            for frame_num in range(0, number_of_frames, self.frame_window):
                last_frame = min(frame_num + self.frame_window, number_of_frames - 1)

                for track_id, _ in object_tracks[frame_num].items():
                    # Skip track_id that are not present inside the frame
                    if track_id not in object_tracks[last_frame]:
                        continue

                    # Take the start and end position from the first frame and last frame within frame window
                    start_position = object_tracks[frame_num][track_id][
                        "position_transformed"
                    ]
                    end_position = object_tracks[last_frame][track_id][
                        "position_transformed"
                    ]

                    # When one of the positions is None, that means that the position is not inside the given area
                    if start_position is None or end_position is None:
                        continue

                    # Calculate distance and speed
                    distance_covered = measure_distance(start_position, end_position)
                    time_elapsed = (last_frame - frame_num) / self.frame_rate
                    speed_meters_per_second = distance_covered / time_elapsed
                    speed_km_per_hour = speed_meters_per_second * 3.6

                    # Create key for object (player) if it does not exist
                    if object not in total_distance:
                        total_distance[object] = {}

                    # Create key for track_id (specific player) if it does not exist
                    if track_id not in total_distance[object]:
                        total_distance[object][track_id] = 0

                    # Add the accumulating distance for the specific player
                    total_distance[object][track_id] += distance_covered

                    for frame_num_batch in range(frame_num, last_frame):
                        if track_id not in tracks[object][frame_num_batch]:
                            continue
                        tracks[object][frame_num_batch][track_id][
                            "speed"
                        ] = speed_km_per_hour
                        tracks[object][frame_num_batch][track_id]["distance"] = (
                            total_distance[object][track_id]
                        )

    def draw_speed_and_distance(self, frames, tracks):
        output_frames = []
        for frame_num, frame in enumerate(frames):
            for object, object_tracks in tracks.items():
                if object == "ball" or object == "referees":
                    continue
                for _, track_info in object_tracks[frame_num].items():
                    if "speed" in track_info:
                        speed = track_info.get("speed", None)
                        distance = track_info.get("distance", None)
                        if speed is None or distance is None:
                            continue
                        bbox = track_info["bbox"]
                        position = get_foot_position(bbox)
                        position = list(position)
                        position[1] += 40

                        position = tuple(map(int, position))
                        cv2.putText(
                            frame,
                            f"{speed:.2f} km/h",
                            position,
                            cv2.FONT_HERSHEY_SIMPLEX,
                            0.5,
                            (0, 0, 0),
                            2,
                        )
                        cv2.putText(
                            frame,
                            f"{distance:.2f} m",
                            (position[0], position[1] + 20),
                            cv2.FONT_HERSHEY_SIMPLEX,
                            0.5,
                            (0, 0, 0),
                            2,
                        )
            output_frames.append(frame)
        return output_frames
