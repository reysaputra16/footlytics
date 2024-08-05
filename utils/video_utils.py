import cv2
import os
import sys

sys.path.append("../")


def read_video(video_path, max_frames=-1):
    cap = cv2.VideoCapture(video_path)
    frames = []
    if max_frames < 0:
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            frames.append(frame)
    else:
        count = 0
        while count < max_frames:
            ret, frame = cap.read()
            if not ret:
                break
            frames.append(frame)
            count += 1
    return frames


def save_video(output_video_frames, output_video_path):
    fourcc = cv2.VideoWriter_fourcc(*"XVID")
    out = cv2.VideoWriter(
        output_video_path,
        fourcc,
        30,
        (output_video_frames[0].shape[1], output_video_frames[0].shape[0]),
    )

    for frame in output_video_frames:
        out.write(frame)
    out.release()


def save_frames_as_img(output_folder, file_name, video_frames, between_frames=200):
    for i in range(0, len(video_frames), between_frames):
        i = min(i, len(video_frames) - 1)
        cv2.imwrite(
            os.path.join(output_folder, file_name + ("__%d.jpg" % i)),
            video_frames[i],
        )
