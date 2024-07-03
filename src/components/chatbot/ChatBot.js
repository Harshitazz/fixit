import React, { useState } from "react";
import { askQuestion  } from "../../api";
import Questionbadge from "./Questionbadge";

function ChatBot({ initialQuestion }) {
  const [question, setQuestion] = useState(initialQuestion || "");
  const [answer, setAnswer] = useState("");
  const questions = ["What is your name?", "How are you?", "What can you do?"];

  const handleAskQuestion = async () => {
    try {
      const responseAnswer = await askQuestion(question);
      setAnswer(responseAnswer);
    } catch (error) {
      console.error(error);
      setAnswer("Could not fetch the answer.");
    }
  };

  return (
    <div className="flex flex-col h-full w-[75%]">
      {/* Logo */}
      <div className="flex items-center justify-center p-4 bg-gray-100 text-black">
        <img
          src="https://www.fix-it.ai/_next/static/media/fixit_white_bg.3734d2d4.svg"
          alt="Logo"
          className="h-8"
        />
        <h1 className="ml-4 text-4xl ">fiXit</h1>
      </div>

      {/* Input and Button */}
      <div className="flex flex-col items-center p-4 bg-gray-100 flex-grow">
        <div className="relative w-[80%]">
          <div className="flex items-center border border-gray-300 rounded-md p-3 mx-5 shadow-md justify-between">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="SalesGPT can help you to browse uncovered topics"
              className="bg-transparent border-none rounded text-black font-inherit text-inherit h-full outline-none relative w-[400px]"
            />
            <button
              onClick={handleAskQuestion}
              className="p-2 bg-transparent text-white rounded"
            >
              <img
                src="./right-arrow.png"
                alt="Ask"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>

        {answer && (
          <p className="mt-4 text-lg text-gray-800">Answer: {answer}</p>
        )}

        <div className="flex flex-wrap m-4">
          <span>Try Asking -</span>
          {questions.map((q, index) => (
            <Questionbadge
              key={index}
              ques={q}
              onClick={() => {
                setQuestion(q);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
