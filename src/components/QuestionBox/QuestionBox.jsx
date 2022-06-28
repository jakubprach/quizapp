import React from 'react'
export const QuestionBox = () => {

const questions  = [
    {
        id:1,
        question:"x+2=4",
        answer: 2
    },
    {
        id:2,
        question:"x+1=10",
        answer: 9
    },
    {
        id:3,
        question:"x-0=0",
        answer: 0
    },
    {
        id:4,
        question:"3x=9",
        answer: 3
    },
    {
        id:5,
        question:"15x=5",
        answer: 3
    },
    
    ]

    let number = 0;
    

  return (
    <div className='container'>
        <h1>{questions[number].question}</h1>
        <div className="answer1">
        <h1 className="text-3xl  underline">
      Hello world!
    </h1>
        </div>
        <div className="answer2">

        </div>
        <div className="answer3">

        </div>
    </div>
  )
}

export default QuestionBox