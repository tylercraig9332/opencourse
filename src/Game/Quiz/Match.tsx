import React, { useState, useEffect, CSSProperties, Fragment } from 'react';

import { Card, Progress, Input, Alert } from 'antd';

import CorrectAlert from './CorrectAlert'

type MatchProps = {
    title : string,
    word : string
};
// Note: I may want to add an option to remove the progress and replace it with a button as another variant of this component

export default function Match(props : MatchProps) {
    
    const [progress, setProgress] = useState<number>(0);
    const [correct, setCorrect] = useState<boolean>(false)
    const CORRECT_COLOR = '#52C41A'

    useEffect(() => {
        // If user guess correct then we validate
        let c = correct
        if (progress === 100) {
            c = true
        }
        setCorrect(c)
    }, [progress])

    useEffect(() => {
        // Handle api request to save the answer as correct
        // I will leave this empty for now. I may want to pass this up to the parent class.
        console.log("User answered the correct question")
    }, [correct])

    function evaluateState(event : any) {
        const e = event.target.value.toLowerCase();
        let p = 0;
        for (let c = 0; c < e.length; c++) {
            if (e.charAt(c) == props.word.toLowerCase().charAt(c)) {
                p = (e.length / props.word.length) * 100;
            }
            else {
                p = 0
                break;
            }
        }
        setProgress(p)
    }

    return(
        <div style={wrapStyle}>
            <CorrectAlert show={correct} />
            <Card style={(correct) ? {border: `solid 1px ${CORRECT_COLOR}`, padding: 10, minWidth: 400} : {minWidth: 300}}>
                <strong>{props.title}</strong>
                <hr></hr>
                { (correct) ?
                    <p>{props.word} <i className="fas fa-check-circle" style={{color: CORRECT_COLOR}}></i></p> :
                    <Input placeholder="Take a guess?" onChange={evaluateState}/>
                }   
                <Progress percent={(correct) ? 100 : progress} showInfo={false}/>
            </Card>
        </div>
    );
}

const wrapStyle = {
    //maxWidth: 600,
    padding: 20,
} as CSSProperties