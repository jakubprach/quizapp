import 'flowbite';
import { useState } from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QuestionBox(props) {


    //let number = 0;

    const checkAnswer = async (answer) => {
        if(answer == props.answerCorrect){
            toast.success('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            await new Promise(r => setTimeout(r, 2750));
            props.setCurrent(props.current + 1)
        }
        else{
            toast.error('Wrong answer', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
      }

    return (
      <div>
        {props.current == props.id && (
          <div className="mx-auto w-1/2 container mt-[40px] bg-[#e5e5e5] rounded-[30px] ">
            <h6 class="pt-4">Pytanie {props.id} / 5</h6>

            <div class="p-8 pt-0">
              <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">
                {props.question}
              </h1>
              <div class="mt-[40px]">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    class="bg-blue-600 h-4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: "45%" }}
                  >
                    45%
                  </div>
                </div>
                <div>
                  <button
                    id="btnA"
                    onClick={() => checkAnswer(props.answer1)}
                    class="w-1/3 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900"
                  >
                    A) {props.answer1}
                  </button>
                  <button
                    onClick={() => checkAnswer(props.answer2)}
                    class="w-1/3 mt-8 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900"
                  >
                    B) {props.answer2}
                  </button>
                </div>

                <div class="mb-8">
                  <button
                    onClick={() => checkAnswer(props.answer3)}
                    class="w-1/3 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900"
                  >
                    C) {props.answer3}
                  </button>
                  <button
                    onClick={() => checkAnswer(props.answer4)}
                    class="w-1/3 mt-8 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900"
                  >
                    D) {props.answer4}
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
