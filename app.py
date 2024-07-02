# app.py
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://flask_user:your_password@localhost/flask_app_db'
db = SQLAlchemy(app)
CORS(app)  

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_text = db.Column(db.String(200), unique=True, nullable=False)
    answer_text = db.Column(db.String(200), nullable=False)

@app.route('/questions/<question_text>', methods=['GET'])
def get_answer(question_text):
    question = Question.query.filter_by(question_text=question_text.lower()).first()
    if question:
        return jsonify({"answer": question.answer_text})
    else:
        return jsonify({"error": "Question not found"}), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001) 