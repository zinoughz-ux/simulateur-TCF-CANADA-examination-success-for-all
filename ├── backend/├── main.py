from fastapi import FastAPI
from pydantic import BaseModel
from openai_service import correct_text

app = FastAPI()

class TextInput(BaseModel):
    text: str
    task: int

@app.post("/api/correct")
def correct(data: TextInput):
    feedback = correct_text(data.text, data.task)
    return {"feedback": feedback}
