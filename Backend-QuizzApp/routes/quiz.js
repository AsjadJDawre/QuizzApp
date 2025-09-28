
import { Router } from "express";
import { checkResult, getQuestions } from "../controller.js/questions.js";

export const router = Router();

router.get("/questions", getQuestions )

router.post("/quiz/submit",checkResult)
