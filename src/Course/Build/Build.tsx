import React, { useState, useEffect } from 'react'
import Details from './Details'
import Chapter from './Chapter'
import Preview from '../../Util/Preview'
import LoadSpin from '../../Util/LoadSpin'
import './build.css'

import { Button, message } from 'antd'

import {IChapter} from '../../@types/Interface'

import { fetchDetails, fetchAuth, savePreview } from '../../api/course'
import { fetchChapters, initChapters } from '../../api/chapter' 

export default function Build() {

    const [courseName, setCourseName] = useState<string>('')
    const [courseDesc, setCourseDesc] = useState<string>('')
    const [courseId, setCourseId] = useState<number>(-1)
    const [coursePrev, setCoursePrev] = useState<string>('/static/light_color.jpg')

    const [chapters, setChapters] = useState<IChapter[]>(initChapters)

    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        let windowID = Number(window.location.href.split('/')[5])
        if (windowID === 0 || Number.isNaN(windowID)) {
            windowID = -1
        }
        setCourseId(windowID)
        fetchAuth(windowID).then(auth => {
            // Handle response from server allowing user to edit this course
            // Note: This is also done on the server, This just prevents the ui from loading
            // So if someone were to maliciously cut this code out from browser, the server should still prevent editing of courses not owned 
            if (!auth) {
                message.error("You do not have permisson to edit this course.")
                window.setTimeout(() => window.location.href = '/courses/all', 100)
            }
        })
        fetchDetails(windowID).then((data : any) => {
            setCourseName(data.name)
            setCourseDesc(data.description)
            setCoursePrev(data.preview)
        })
        fetchChapters(windowID).then((cdata: any) => {
            if (cdata.length < 1) cdata = initChapters
            setChapters(cdata)
            
            setLoaded(true)
        })
        // fetch data about course
        // also don't allow non-users to edit course with right permissions...
    }, [])

    function handlePreview(uri : string) {
        if (uri != coursePrev) {
            console.log(uri, coursePrev)
            savePreview(courseId, uri)
        }
        setCoursePrev(uri)
    }


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
    // TODO: add more error handling: I don't think the array updates right but for now this works.
    if (!loaded) return <LoadSpin message="Loading course..."/>
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
            <Preview id={courseId} preview={coursePrev} savePreview={handlePreview}/>
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
