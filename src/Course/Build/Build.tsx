import React, { useState, useEffect } from 'react'
import Details from './Details'
import Chapter from './Chapter'
import './build.css'

import {IChapter, ILesson} from '../../@types/Interface'

export default function Build() {

    const [courseName, setCourseName] = useState<string>('')
    const [courseDesc, setCourseDesc] = useState<string>('')

    const [chapters, setChapters] = useState<IChapter[]>([{
        name: 'Chapter 1',
        description: '',
        lessons: [{
            name: 'Lesson 1',
            description: '',
            type: 'lecture',
            data: {}
        }] // : Lessson[]
    }])

    const chaptMap = chapters.map((chapter, i) => {
        return (
            <Chapter
                chapter={chapter} 
                setChapter={(newC : IChapter) => {
                    let c = [...chapters]
                    c[i] = newC
                    setChapters(c)
                }}
                />
        )
    })
    
    return (
        <div className="container">
            <h1 className="dg">Create New Course</h1>
            <hr></hr>
            <Details courseName={courseName} courseDesc={courseDesc} setName={(val : string) => setCourseName(val)} setDesc={(val : string) => setCourseDesc(val)}/>
            <hr></hr>
            {/* TODO: Put this in it's own chapter... */}
            <h3 className="dg">Chapters</h3>
            <hr style={{width: '10%', marginLeft: 0}}></hr>
            <div style={container}>
                {chaptMap}
            </div>
            
        </div>
    )
}

const container = {
    padding: 10
}
