import { Button, message, Steps } from 'antd'
import React, { useState, useEffect } from 'react'
import Details from './Details'
import LessonBuild from './LessonBuild'
import Publish from './Publish'

import { ILesson } from '../../@types/Interface'
import { initLesson, saveLesson, loadLesson, fetchAuth } from '../../api/lesson'

const { Step } = Steps

export default function BuildWrap() {

    const [lesson, setLesson] = useState<ILesson>(initLesson)
    const [id, setId] = useState<number>(-1) // This state is kind of useless since lesson will have the same property but this was added before I moved lesson up

    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        const ids = window.location.href.split('/')
        let windowID = Number(ids[5])
        let courseID = ids[6] !== undefined ? Number(ids[6]) : -1
        let chapterID = ids[7] !== undefined ? Number(ids[7]) : -1
        if (windowID === 0 || Number.isNaN(windowID)) {
            windowID = -1
        }
        setId(windowID)
        fetchAuth(windowID).then(auth => {
            if (!auth) {
                message.error("You do not have permisson to edit this lesson.")
                window.setTimeout(() => window.location.href = '/lessons/all', 100)
            }
        })
        loadLesson(windowID).then((l : ILesson) => {
            if (l == undefined) l = initLesson
            if (chapterID != -1 && courseID != -1) {
                // TODO: This doesn't save for right now for some unknown reason, but the course will still be made.
                // I will fix this at a later time
                l.chapterID = chapterID
                l.courseID = courseID
            }
            //console.log(l)
            setLesson(l)
            let i = id
            if (l.id != undefined) {
                i = (Number(l.id))
            }
            setId(i)
        })
    }, [])

    useEffect(() => {
        // use this windowId if there is an inital load
        let windowID = Number(window.location.href.split('/')[5])
        if (id !== -1) {
            windowID = id
        } else if (windowID === 0 || Number.isNaN(windowID)) {
            windowID = -1
        }
        // I know it's not good to set the state in a conditional but I can't think of another way to do it :(
        if (current > 0 || (current === 0 && windowID === -1)) {
            saveLesson(windowID, lesson).then((res : any) => {
                setId(res.id)
                console.log("Saved lesson " + res.id)
            })
        } else {
            setId(windowID)
        }
    }, [current])


    /* Functions corresponding to the navigator */

    function next() {
        let next = current + 1
        //Uncomment when ready for form validation
        if (current === 0) {
            const t = lesson.name
            const d = lesson.description
            if (t == null || t.length === 0) {
                message.warning("Please enter a title")
                next = 0
            }
            if (d == null || d.length === 0) {
                message.warning("Please add a description")
                next = 0
            }
        }
        setCurrent(next)
    }

    function done() {
        message.success('Success!');
        if (lesson.courseID != -1) {
            window.setTimeout(() => window.location.href = '/courses/build/' + lesson.courseID, 500)
        }
        console.log(lesson.courseID)
        window.setTimeout(() => window.location.href = "/lessons/all", 500)
    }

    const steps = [
        {
            title: 'Lesson Details',
            id: 'course',
            content: <Details lesson={lesson} setLesson={(l : ILesson) => setLesson(l)}/>,
        },
        {
            title: 'Lesson Builder',
            id: 'lesson',
            content: <LessonBuild lesson={lesson} setLesson={(l : ILesson) => setLesson(l)}/>
        },
        {
            title: 'Review & Publish',
            id: 'review',
            content: <Publish lesson={lesson}/>
        }
    ]
    return (
        <div className="container" style={wrapper}>
            <div style={stepswrapper}>
                <Steps current={current} key={current} progressDot>
                    {
                        steps.map((item, i) => {
                            let icon = (<i className="far fa-circle"></i>)
                            if (i === current)
                                icon = (<i className="fas fa-circle"></i>)
                            else if (i < current)
                                icon = (<i className="fas fa-check-circle"></i>)
                            return <Step key={item.title} title={item.title} />
                        })
                    }
                </Steps>
            <hr></hr>
            </div>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action" style={{float: 'right', marginLeft: '3rem', marginTop: 10, marginBottom: 10}}>
            {current > 0 && (
                <Button onClick={() => setCurrent(current - 1)}>
                Previous
                </Button>
            )}
            {current === steps.length - 1 && (
                <Button type="primary" onClick={done} style={{ marginLeft: 8 }}>
                Done
                </Button>
            )}
            {current < steps.length - 1 && (
                <Button type="primary" onClick={next} style={{ marginLeft: 8 }}>
                Next
                </Button>
            )}
            </div>
        </div>
    )
}

const stepswrapper = {
    marginLeft: 'auto',
    marignRight: 'auto',
}

const wrapper = {
    marginLeft: 'auto',
    marignRight: 'auto',
    marginTop: 20, 
    alignText: 'center',
    padding: 20
}