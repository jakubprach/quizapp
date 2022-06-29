import 'flowbite';
import { useEffect, useState } from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuestionBox.css'

export default function QuestionBox(props) {


    const [Checked, setChecked] = useState('')
    const [Disabled, setDisabled] = useState(false)
    const [bttnClass, setBttnClass] = useState(() => letter => {
            return('w-1/3 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900')
    })
    useEffect(() => {
      setBttnClass(() => letter => {
            if (Checked == letter) {
                return('w-1/3 mx-4 bg-[#2b2d42] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900')
            } else {
                return('w-1/3 mt-4 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900 disabled:opacity-25')
            }
        })
      }, [Checked]);
      
  const checkAnswer = async () => {
        setDisabled(true)
        if(Checked == props.answerCorrect){
            toast.success('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            await new Promise(r => setTimeout(r, 2750));
            props.setCorrect(props.correct + 1)
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
            await new Promise(r => setTimeout(r, 2750));
            props.setCurrent(props.current + 1)
            
        }
      }
      

    return (
      <div>
        {props.current == props.id && (
          <div className="mx-auto w-2/3 container mt-[40px] bg-[#e5e5e5] rounded-[30px] ">
            <h6 className="pt-4">Pytanie {props.id} / 5</h6>

            <div className="p-8 pt-0">
              <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">
                {props.question}
              </h1>
              <div class="mt-[40px]">
                
                <div>
                  <button
                    id="A"
                    disabled={Disabled}
                    onClick={() => { setChecked('A')}}
                    className={bttnClass('A')}
                  >
                    A) x = {props.answer1}
                  </button>
                  <button
                    id="B"
                    disabled={Disabled}
                    onClick={() => { setChecked('B')}}
                    className={bttnClass('B')}
                  >
                    B) x = {props.answer2}
                  </button>
                </div>

                <div className="mb-8">
                  <button
                    id="C"
                    disabled={Disabled}
                    onClick={() => { setChecked('C')}}
                    className={bttnClass('C')}
                  >
                    C) x = {props.answer3}
                  </button>
                  <button
                    id="D"
                    disabled={Disabled}
                    onClick={() => { setChecked('D')}}
                    className={bttnClass('D')}
                  >
                    D) x = {props.answer4}
                  </button>
                  <div className="submit">
                    <button
                      className=" mt-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={checkAnswer}
                    >
                      Potwierdź odpowiedź
                    </button>
                  </div>
                </div>
                <div class="w-full bg-[#C3CAD5] rounded-full dark:bg-gray-700">
                <div id ={props.idcss}
                    class="bg-blue-600 h-4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  >
                    {props.barPercent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
