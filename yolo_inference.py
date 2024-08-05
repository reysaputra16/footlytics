from ultralytics import YOLO

original_model = "yolov8m.pt"
bundesliga_model_best = "models/bundesliga/best.pt"
bundesliga_model_last = "models/bundesliga/last.pt"

model = YOLO(bundesliga_model_best)

results = model.predict("input_videos/ff-01-08-2024-1.mp4", save=True)
print(results[0])
print("============================")
for box in results[0].boxes:
    print(box)
