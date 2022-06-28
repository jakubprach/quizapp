import React from 'react'
import { Questions } from '../../data/Questions'
import QuestionBox from '../QuestionBox/QuestionBox';
import { useState } from 'react'
export default function Quiz() {
    const [correct, setCorrect] = useState(0)
    const [current, setCurrent] = useState(1)
    return (
        Questions.map((question) => (
            <QuestionBox
                key = {question.id}
                {...question}
                current={current}
                setCurrent={setCurrent}
                correct = {correct}
                setCorrect={setCorrect}
            />
    ))
);
}