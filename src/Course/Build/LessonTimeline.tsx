import React, { useState, useEffect } from 'react'
import { ILesson } from '../../@types/Interface'
import PreviewCard from '../../Lesson/PreviewCard'

import {initLesson} from '../../api/lesson'

import { Timeline, Button, Icon } from 'antd'
const { Item } = Timeline

/* Lesson Timeline Props */
type LTProps = {
    chapterID : number | string | undefined,
    courseID : number | string | undefined
}

export default function LessonTimeline(props : LTProps) {

    const [lessons, setLessons] = useState<ILesson[]>([])

    useEffect(() => {
        // TODO: initalize all lessons with chapter and course ids from props.
    }, [])

    function addLesson() : void {
        // TOOD: handle redirect and request to make a new lesson with this chapter and course id

    } 

    const lessonItems = lessons.map((lesson : ILesson, i : number) => {
        let dot
        if (lesson.type === 'video') {
            dot = <Icon type="youtube" style={{fontSize: '16px', color: 'red'}} />
        } else if (lesson.type === 'game') {
            dot = <Icon type="play-circle" style={{fontSize: '16px', color: 'green'}} />
        } else {
            dot = ''
        }
        console.log(lesson)
        return <Item dot={dot} key={lesson.name}>
            <PreviewCard lesson={lesson} toolbar={false}/>
        </Item>
    })

    return (
        <Timeline>
            {lessonItems}
            <Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                <div className="addLesson">
                    <Button style={{width: 300}} onClick={addLesson}>Add Lesson</Button>
                </div>
            </Item>
        </Timeline>
    )
}