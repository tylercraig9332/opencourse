import React from 'react'
import {IChapter, ILesson} from '../../@types/Interface'
import './build.css'

type ChapterProps = {
    chapter: IChapter,
    setChapter(c : IChapter): void
}

export default function Chapter(props : ChapterProps) {

    const {name, description, lessons} = props.chapter

    return (
        <div>
            <h5 className="dg">{name}</h5>
            <p>{description}</p>
            {/* LESSONS MAP HERE */}
        </div>
    )
} 