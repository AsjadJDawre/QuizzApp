import React from "react";
import { useQuiz } from "../context/QuizContext";
import "../styles/Start.css"

export default function Start() {
  const { startQuiz } = useQuiz();

  return (
    <div className="start-screen">
      <h1>Welcome to the Quiz!</h1>
      <button className="btn primary" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}
