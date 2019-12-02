import React from 'react'

import ListView from './ListView'

export default function Home() {
    // TODO: render list of all courses
    // also render list of all lecture types
    // also render list of all video types
    // set in a netflix style browse page
    return (
        <React.Fragment>
            <ListView fetchString="all" key="all" title="All Lessons"/>
            <ListView fetchString="video" key="video" title="Videos"/>
            <ListView fetchString="lecture" key="lecture" title="Lecture Notes"/>
        </React.Fragment>
    )
}

