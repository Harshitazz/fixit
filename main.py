from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

class Question(BaseModel):
    question: str

@app.post("/ask")
async def ask_question(question: Question):
    response = requests.get(f"http://localhost:5001/questions/{question.question.lower()}")
    if response.status_code == 404:
        raise HTTPException(status_code=404, detail="Question not found")
    return response.json()



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
