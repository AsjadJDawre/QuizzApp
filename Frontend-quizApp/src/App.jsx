import React from "react";
import { QuizProvider, useQuiz } from "./context/QuizContext";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./App.css"
function AppContent() {
  const { stage } = useQuiz();

  return (
    <div className="app-container">
      {stage === "start" && <Start />}
      {stage === "quiz" && <Quiz />}
      {stage === "results" && <Results />}
    </div>
  );
}

export default function App() {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
}
