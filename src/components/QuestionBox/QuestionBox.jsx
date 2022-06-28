import React from 'react'
import { useState } from 'react'
export default function QuestionBox(props) {


    //const [answered, setAnswered] = useState(0)
    function answered() {
        props.setCurrent(props.current + 1)
    }

    return (
      <div>
        {props.current == props.id && 
          <div className="mx-auto container mt-[40px] bg-[#e5e5e5] rounded-[30px]">
            <div className="p-8">
              <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">
                {props.question}
              </h1>
              <div className="mt-[40px]">
                <div className="mb-8">
                  <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    A) Odpowiedź A
                  </button>
                  <button className="mt-8 mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    B) Odpowiedź B
                  </button>
                </div>

                <div className="mb-8">
                  <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    C) Odpowiedź C
                  </button>
                  <button className="mt-8 mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    D) Odpowiedź D
                  </button>

                  <div className="submit">
                    <button
                      className=" mt-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                      type="submit"
                    >
                      Potwierdź odpowiedź
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
}
