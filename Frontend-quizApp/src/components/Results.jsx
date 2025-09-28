import React from "react";
import { useQuiz } from "../context/QuizContext";
import "../styles/Results.css"
export default function Results() {
  const { result, restart } = useQuiz();

  if (!result || !result.result?.length) {
    return <div className="center">No results to show</div>;
  }

  const correctCount = result.result.filter(r => r.isCorrect).length;
  const total = result.total;

  return (
    <div className="results-container">
      <h2>Quiz Completed!</h2>
      <div className="score">You scored {correctCount} / {total}</div>
      <ul className="results-list">
        {result.result.map((r, idx) => (
          <li key={idx} className={`result-item ${r.isCorrect ? "correct" : "wrong"}`}>
            <span>Q{idx + 1}:</span> {r.isCorrect ? "Correct ✅" : `Wrong ❌ (Correct: ${String.fromCharCode(65 + r.correctIndex)})`}
          </li>
        ))}
      </ul>
      <button className="btn primary" onClick={restart}>Restart Quiz</button>
    </div>
  );
}
