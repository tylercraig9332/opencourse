import React from 'react'
import { ILesson } from '../@types/Interface'

type PreviewCardProps = {
    lesson: ILesson
}

export default function PreviewCard(props : PreviewCardProps) {
    return (
        <div>
            <h6>{props.lesson.name}</h6>
            <p>{props.lesson.description}</p>
            <p>{props.lesson.type}</p>
            <p>{props.lesson.data}</p>
        </div>
    )
}