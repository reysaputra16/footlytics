from ultralytics import YOLO

original_model_m = "yolov8m.pt"
original_model_x = "yolov8x.pt"
bundesliga_model_best = "models/bundesliga/bestm.pt"
bundesliga_model_last = "models/bundesliga/lastm.pt"

model = YOLO(original_model_x)

results = model.predict("input_videos/ff-01-08-2024-1.mp4", save=True)
print(results[0])
print("============================")
for box in results[0].boxes:
    print(box)
