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
    <div className='mx-auto container mt-[40px] bg-[#e5e5e5] rounded-[30px] '>
        <div class="p-8"> 
            <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">{questions[number].question}</h1>
        <div class="mt-[40px]">   
                <div class="mb-8">
                <button class="mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900">
                    A) Odpowiedź A
                    </button>
                    <button class="mt-8 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900">
                    B) Odpowiedź B
                    </button>
                    </div>

                    <div class="mb-8">
                    <button class="mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900">
                    C) Odpowiedź C
                    </button>
                    <button class="mt-8 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900">
                    D) Odpowiedź D
                    </button>
                    
                    <div className="submit">
                        <button className=' mt-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' type="submit">
                        Potwierdź odpowiedź
                        </button>
                    </div>
                    </div>
        </div>


        </div>
       
    </div>
  )
}

export default QuestionBox