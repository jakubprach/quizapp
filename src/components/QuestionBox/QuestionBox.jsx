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
    <div className='container mt-[40px]'>
        <h1>{questions[number].question}</h1>
        <div className="answer1">

        </div>
        <div className="answer2">

        </div>
        <div className="answer3">
        </div>
        <div class="mt-[40px]">   
                <div class="mb-8">
                    <button class="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    A) Odpowiedź A
                    </button>
                    <button class="mt-8 mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    B) Odpowiedź B
                    </button>
                    </div>

                    <div class="mb-8">
                    <button class="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    C) Odpowiedź C
                    </button>
                    <button class="mt-8 mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    D) Odpowiedź D
                    </button>
                    </div>
        </div>
    </div>
  )
}

export default QuestionBox