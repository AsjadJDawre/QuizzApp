import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import Question from "./Question";
import "../styles/Quizz.css";

export default function Quiz() {
  const { questions, answers, setAnswers, submitQuiz, quitQuiz } = useQuiz();
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * (questions.length || 1));

  useEffect(() => {
    setIndex(0);
    setTimeLeft(60 * (questions.length || 1));
  }, [questions]);

  useEffect(() => {
    if (!questions.length) return;
    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, questions]);

  function selectOption(qId, selectedIndex) {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.id === qId);
      if (existing) {
        return prev.map((a) =>
          a.id === qId ? { ...a, selectedIndex } : a
        );
      } else {
        return [...prev, { id: qId, selectedIndex }];
      }
    });
  }

  if (!questions.length) return <div className="center">Loading...</div>;

  const q = questions[index];

  return (
    <div className="quiz">
      <div className="quiz-header">
        <div>Question {index + 1} / {questions.length}</div>
        <div>Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}</div>
      </div>

      <Question
        question={q}
        selectedIndex={answers.find((a) => a.id === q._id)?.selectedIndex ?? null}
        onSelect={selectOption}
      />

      <div className="controls">
        <button className="btn" disabled={index === 0} onClick={() => setIndex(i => i - 1)}>
          Previous
        </button>
        {index < questions.length - 1 ? (
          <button className="btn" onClick={() => setIndex(i => i + 1)}>Next</button>
        ) : (
          <button className="btn primary" onClick={submitQuiz}>Submit</button>
        )}
        <button className="btn ghost" onClick={quitQuiz}>Quit</button>
      </div>
    </div>
  );
}
