import { Questions } from "./models/questions.js";

export const  SeedIfEmpty = async ()=>{
try {
    const count = await  Questions.countDocuments()
    if (count===0){
      const data =   await Questions.insertMany([
{
    text:"Which of the following is NOT a feature of React?",
    options:['Virtual DOM',
     'One-way data binding' ,
    'Built-in state management like Redux',
    'Component-based architecture'],
    correctIndex:2 },

{
    text:"In CSS, what does the z-index property control?",
    options : [
        'The size of the element',
     'The stacking order of elements',
 'The transparency of the element',
 'The text alignment'
    ] ,
    correctIndex : 1

}, 


{

    text : "Which HTTP method is typically used to update existing data in REST APIs?",
    options: [
        'GET',
         'POST',
         "PUT",
        'DELETE'
        
    ],
    correctIndex : 2
},


{
    text : "In JavaScript, what will console.log([] == 0) output?",
    options: [
        'true',
         'false',
        'undefined',
        'NaN'
    ],
    correctIndex: 0

},

{
    text: "Which of the following is a NoSQL database?",
    options: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
       'Oracle'
    ],
    correctIndex: 1

} ,


{
    text: "What does the term ACID stand for in databases?",
    options: [
        'Atomicity, Consistency, Isolation, Durability',
        'Availability, Consistency, Integrity, Durability',
        'Atomicity, Concurrency, Isolation, Dependency',
         'Authentication, Consistency, Isolation, Data'
    ],
    correctIndex: 0
},
{
    text: "In Node.js, which module is used to create a server?",
    options: [ 
        "fs",
        "http",
        "url",
        "express"
    ]
    ,correctIndex: 1
},

{
    text: " Which HTTP status code indicates that the requested resource was not found?",
    options: [ 
        "200",
        "300",
        "400",
        "404"
    ],
    correctIndex: 3
}



])
    console.log('Seeded questions',data)

    }
} catch (error) {
    console.log("error in seeding initial questions in seed.js :: ",error.message

    )
}
}