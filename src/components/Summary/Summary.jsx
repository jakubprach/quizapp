import { useEffect, useState } from 'react'
import React from 'react';
export default function Summary(props)
{
    return (
        <div className="mx-auto w-1/2 container mt-[40px] bg-[#e5e5e5] rounded-[30px] ">
            <h6 className="pt-4">Liczba Poprawnych odpowiedzi {props.correct} / 5</h6>
        </div>
    );
}