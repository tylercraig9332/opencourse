import React, { useEffect } from 'react'
import { Cascader } from 'antd'
import Lecture from './Types/Lecture'
import Video from './Types/Video'
export default function LessonBuild(props : any) {

    const [view, setView] = React.useState<string>('')

    useEffect(() => {
        setView(props.lesson.type)
    }, [])

    useEffect(() => {
        let l = Object.assign({}, props.lesson)
        l.type = view
        props.setLesson(l)
    }, [view])

    const casOptions = [
        {
            value: 'lecture',
            label: 'Lecture Note'
        },
        {
            value: 'video',
            label: 'Video'
        },
        {
            value: 'quiz',
            label: 'Quiz'
        },
        {
            value: 'vocab',
            label: 'Vocabulary'
        },
        {
            value: 'game',
            label: 'Game',
            children: [
                {
                    label: 'Matching',
                    value: 'match_game'
                },
                {
                    label: 'Puzzle',
                    value: 'puzzle_game'
                }
            ]
        },
    ]

    const getLesson = () => {
        switch(view) {
            case 'lecture':
                return <Lecture lesson={props.lesson} setLesson={props.setLesson}/>
            case 'video':
                return <Video lesson={props.lesson} setLesson={props.setLesson}/>
            default:
                return (<div>{view} coming soon...</div>)

        }
    }


    return (
        <div>
            <h5 style={dimg}>Select Lesson Type:</h5>
            <Cascader size="large" options={casOptions} onChange={(value : string[]) => setView(value[0])}/>
            <hr></hr>
            {getLesson()}
        </div>
    )
}

const dimg = {
    color: 'dimgray'
}