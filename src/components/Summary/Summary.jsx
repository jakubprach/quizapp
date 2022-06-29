import { useEffect, useState } from 'react'
import React from 'react';
export default function Summary(props)
{
    return (
        <div className="pt-8 mx-auto w-1/2 container mt-[40px] bg-[#e5e5e5] rounded-[30px] ">
            <h1 className="text-2xl">Liczba Poprawnych odpowiedzi {props.correct} / 5</h1>

            <div class="pb-8 mt-8">    
                <button class="w-1/3 mx-4 bg-[#8d99ae] hover:bg-[#2b2d42] text-white font-bold py-2 px-4 rounded border border-slate-900 hover:border-indigo-900">
                <a href="/">Wypełnij jeszcze raz!</a> 
                </button>
            </div>
        </div>
    );
}