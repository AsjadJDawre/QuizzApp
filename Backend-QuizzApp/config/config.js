import mongoose from "mongoose";
export const Config =async ()=>{
    try {
        const url = process.env.DB_URL

        console.log(url)
        const ConnectionInstance = await mongoose.connect(`${url}`)
        console.log(`Connected to ${ConnectionInstance?.connection?.db?.databaseName}`)
    } catch (error) {
        console.log("Error in Connecting to Database  ::",error.message)
    }
}