from fastapi import FastAPI
from pymongo import MongoClient

app = FastAPI()

# Conexión a MongoDB Atlas
client = MongoClient("mongodb+srv://itzelespinozamontoyach:tec12345678@cluster0.4y9bj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["SignIA"]
collection = db["LSM_Plataforma"]

@app.get("/progress")
def get_progress():
    # Busca el documento de progreso (si no existe, crea uno por defecto)
    progress_doc = collection.find_one({"_id": "app_progress"})
    if not progress_doc:
        progress_doc = {"_id": "app_progress", "percentage": 10, "status": "En desarrollo"}
        collection.insert_one(progress_doc)
    return {
        "percentage": progress_doc["percentage"],
        "status": progress_doc["status"]
    }

@app.post("/progress/update")
def update_progress(percentage: int, status: str):
    # Actualiza el progreso
    collection.update_one(
        {"_id": "app_progress"},
        {"$set": {"percentage": percentage, "status": status}},
        upsert=True
    )
    return {"message": "Progreso actualizado", "percentage": percentage, "status": status}