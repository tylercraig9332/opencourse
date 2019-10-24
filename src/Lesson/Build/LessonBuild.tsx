import { Cascader } from 'antd'
import React from 'react'
import Lecture from './Lecture'
import Video from './Video'
export default function LessonBuild(props : any) {

    const [view, setView] = React.useState<string>('')

    React.useEffect(() => {
        //console.log(view)
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
                return <Lecture />
            case 'video':
                return <Video />
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