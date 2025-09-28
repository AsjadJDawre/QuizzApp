import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [stage, setStage] = useState("start"); // start | quiz | results
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]); // [{ id, selectedIndex }]
  const [result, setResult] = useState(null);
  const url = import.meta.env.VITE_Backend_url || "http://localhost:3000";

  // Fetch questions
  const fetchQuestions = async () => {
    try {
      const res = await axios.get(`${url}/api/questions`);
      if (res.status === 200) {
        setQuestions(res.data.questions);
      }
    } catch (error) {
      console.log("Error fetching questions:", error.message);
    }
  };

  // Start quiz
  const startQuiz = () => {
    setStage("quiz");
    setAnswers([]);
    setResult(null);
    fetchQuestions();
  };

  // Quit quiz
  const quitQuiz = () => {
    setStage("start");
    setAnswers([]);
    setResult(null);
  };

  // Submit quiz
  const submitQuiz = async () => {
    const payload = questions.map((q) => {
      const ans = answers.find((a) => a.id === q._id);
      return { id: q._id, selectedIndex: ans ? ans.selectedIndex : -1 };
    });

    const resp = await axios.post(`${url}/api/quiz/submit`,{answers:payload});
    if(resp.status===200){
        setResult(resp.data);
    setStage("results");
    }
    
  };

  const value = {
    stage,
    questions,
    answers,
    result,
    setAnswers,
    startQuiz,
    quitQuiz,
    submitQuiz,
    restart: () => setStage("start"),
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => useContext(QuizContext);
