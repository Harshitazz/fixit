# init_db.py
from app import app, db, Question

# Create an application context before working with the database
with app.app_context():
    db.create_all()

    questions = [
        {"question_text": "what is your name?", "answer_text": "I am a bot."},
        {"question_text": "how are you?", "answer_text": "I am fine, thank you."},
        {"question_text": "what can you do?", "answer_text": "I can answer your questions."}
    ]

    for q in questions:
        question = Question(question_text=q["question_text"], answer_text=q["answer_text"])
        db.session.add(question)

    db.session.commit()
