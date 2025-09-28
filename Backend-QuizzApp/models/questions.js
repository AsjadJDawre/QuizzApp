import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    text :{
        type :String,
        required :true

    },
    options : {
        type: [String],
        required : true,
         validate: {
      validator: (v) => v.length > 1,
      message: "There must be at least two options.",
    },
    },
    correctIndex : {
        type: Number,
        required : true,
         validate: {
      validator: function (v) {
        return v >= 0 && v < this.options.length;
      },
      message: "Correct index must match one of the options.",
    },
    }
},)

 export const Questions = mongoose.model("questions",QuestionSchema)
