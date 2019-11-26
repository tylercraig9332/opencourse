import React, { useState, useEffect } from 'react'
import Details from './Details'
import Chapter from './Chapter'
import './build.css'

import { Button } from 'antd'

import {IChapter, ILesson} from '../../@types/Interface'

import { fetchDetails } from '../../api/course'
import { fetchChapters, initChapters } from '../../api/chapter' 

export default function Build() {

    const [courseName, setCourseName] = useState<string>('')
    const [courseDesc, setCourseDesc] = useState<string>('')
    const [courseId, setCourseId] = useState<number>(-1)

    const [chapters, setChapters] = useState<IChapter[]>(initChapters)

    useEffect(() => {
        let windowID = Number(window.location.href.split('/')[5])
        if (windowID === 0 || Number.isNaN(windowID)) {
            windowID = -1
        }
        setCourseId(windowID)
        fetchDetails(windowID).then((data : any) => {
            setCourseName(data.name)
            setCourseDesc(data.description)
        })
        fetchChapters(windowID).then((cdata: any) => {
            if (cdata.length < 1) cdata = initChapters
            setChapters(cdata)
        })
        // fetch data about course
        // also don't allow non-users to edit course with right permissions...
    }, [])


    function addChapter() : void {
        let c = [...chapters]
        c.push({
            name: `Chapter ${chapters.length + 1}`,
            description: 'edit me...',
            //lessons: []
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
                courseId={courseId}
                />
        )
    })
    
    return (
        <div className="container">
            <h1 className="dg">{(courseId === -1) ? 'Create New Course' : 'Edit Course'}</h1>
            <hr></hr>
            <Details courseName={courseName} courseDesc={courseDesc} id={courseId}
                    setName={(val : string) => setCourseName(val)} 
                    setDesc={(val : string) => setCourseDesc(val)} 
                    setId={(id : number) => setCourseId(id)}
                    />
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
