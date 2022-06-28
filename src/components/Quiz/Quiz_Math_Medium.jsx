import React from 'react'
import { Questions } from '../../data/QuestionsMedium'
import QuestionBox from '../QuestionBox/QuestionBox';
import { useState } from 'react'

export default function Quiz() {
    //const [answered, setAnswered] = useState(0)
    const [current, setCurrent] = useState(1)
    return (
        Questions.map((question) => (
            <QuestionBox
                key = {question.id}
                {...question}
                current={current}
                setCurrent = {setCurrent}
            />
    ))
);
}