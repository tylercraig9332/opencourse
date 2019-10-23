import React, { useState } from 'react'
import Details from './Details'
import './build.css'

export default function Build(props : any) {

    const [courseName, setCourseName] = useState<string>('')
    const [courseDesc, setCourseDesc] = useState<string>('')
    
    return (
        <div className="container">
            <h1 className="dg" style={{textDecoration: 'underline'}}>Create New Course</h1>
            <Details courseName={courseName} courseDesc={courseDesc} setName={(val : string) => setCourseName(val)} setDesc={(val : string) => setCourseDesc(val)}/>
            <hr></hr>
            {/* TODO: Put this in it's own chapter... */}
            <h3 className="dg">Chapters</h3>
        </div>
    )
}
