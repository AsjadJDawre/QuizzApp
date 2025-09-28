import express from "express"
const app = express()
import dotenv from "dotenv"
import { Config } from "./config/config.js"
import { SeedIfEmpty } from "./seed.js"
import {router as questionRouter} from "./routes/quiz.js"
import cors from 'cors'

app.use(cors("http://localhost:5173"))



// dotenv enable us to keep and use sensitive info outside the code instead of hard coding values
dotenv.config()

// DB Connection 
Config()

// For parsing JSON bodies
app.use(express.json())
// For parsing URL encoded form data
app.use(express.urlencoded({ extended: true }));





// Initial Questions Seeding 
SeedIfEmpty()




const PORT = process.env.PORT
app.get("/",(req,res)=>{
    res.status(200).send("Helllo from backend ")
})


app.use("/api",questionRouter)


app.listen(PORT,()=>{
    console.log("App listening at 3000")
})