import React, { useState, useEffect } from 'react'
import Details from './Details'
import Chapter from './Chapter'
import './build.css'

import { Button } from 'antd'
import Tippy from '@tippy.js/react'

import {IChapter, ILesson} from '../../@types/Interface'

export default function Build() {

    const [courseName, setCourseName] = useState<string>('')
    const [courseDesc, setCourseDesc] = useState<string>('')
    const [courseId, setCourseId] = useState<number>(-1)

    const [chapters, setChapters] = useState<IChapter[]>([{
        name: 'Chapter 1',
        description: 'the first chapter',
        lessons: [{
            name: 'Lesson 1',
            description: '',
            type: 'lecture',
            data: {},
        }], // : Lessson[],
    }])


    function addChapter() : void {
        let c = [...chapters]
        c.push({
            name: `Chapter ${chapters.length + 1}`,
            description: 'edit me...',
            lessons: []
        })
        setChapters(c)
    }

    const chaptMap = chapters.map((chapter, i) => {
        return (
            <Chapter
                chapter={chapter} 
                setChapter={(newC : IChapter) => {
                    let c = [...chapters]
                    c[i] = newC
                    setChapters(c)
                }}
                key={i}
                />
        )
    })
    
    return (
        <div className="container">
            <h1 className="dg">Create New Course - {courseId}</h1>
            <hr></hr>
            <Details courseName={courseName} courseDesc={courseDesc} 
                    setName={(val : string) => setCourseName(val)} setDesc={(val : string) => setCourseDesc(val)} 
                    id={courseId} setId={(id : number) => setCourseId(id)}/>
            <hr></hr>
            {/* TODO: Put this in it's own chapter... */}
            <h3 className="dg">Chapters</h3>
            <hr style={{width: '10%', marginLeft: 0}}></hr>
            <div style={container}>
                {chaptMap}
                
                <Button block onClick={addChapter}>Add Another Chapter</Button>
            </div>
            
        </div>
    )
}

const container = {
    padding: 10
}
