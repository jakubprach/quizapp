import { useEffect, useState } from 'react'
import React from 'react';
export default function Summary(props)
{
    return (
        <div className="mx-auto w-1/2 container mt-[40px] bg-[#e5e5e5] rounded-[30px] ">
            <h1 className="text-2xl">Liczba Poprawnych odpowiedzi {props.correct} / 5</h1>
        </div>
    );
}