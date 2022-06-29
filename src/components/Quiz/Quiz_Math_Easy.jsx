import React from 'react'
import { Questions } from '../../data/QuestionsEasy'
import QuestionBox from '../QuestionBox/QuestionBox';
import Summary from '../Summary/Summary';
import { useState } from 'react'

export default function Quiz() {
    const [correct, setCorrect] = useState(0)
    const [current, setCurrent] = useState(1)
    return (
        <div>
        {current !== 6 &&
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
        }
        {
                current == 6 &&
                <Summary
                    correct = {correct}
                />
        }
    </div>
);
}