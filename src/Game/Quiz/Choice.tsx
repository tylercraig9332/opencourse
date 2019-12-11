import React, {useState} from 'react'

import CorrectAlert from './CorrectAlert'

import { Card, Radio } from 'antd'

const { Group, Button } = Radio

type ChoiceProps = {
    question: string,
    answers: string[],
    correct: number,
    vertical?: boolean
    button?: boolean,
    buttonStyle?: 'solid' | 'outline' | undefined
}

export default function Choice(props : ChoiceProps) {
    
    const CORRECT_COLOR = '#52C41A'
    const [selected, setSelected] = useState<number>(-1)
    const [correct, setCorrect] = useState<boolean>(false)

    function handleSelect(event : any) {
        let c = false
        if (event.target.value == props.correct) c = true
        setCorrect(c)
        setSelected(event.target.value)
    }

    return(
        <div style={{padding: 20}}>
            <CorrectAlert show={correct} />
            <Card style={(correct) ? {border: `solid 1px ${CORRECT_COLOR}`, padding: 10, minWidth: 400} : {minWidth: 300}}>
                <strong>{props.question}</strong>
                <hr></hr>
                <Group onChange={handleSelect} value={selected} buttonStyle={props.buttonStyle}>
                    {props.answers.map((ans, i) => {
                        if (props.button) {
                            return <Button value={i}>{ans}</Button>
                        }
                        return <Radio style={props.vertical ? radioStyle : undefined} value={i}>{ans}</Radio>
                    })}
                </Group>
            </Card>
        </div>
    )
}

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
}