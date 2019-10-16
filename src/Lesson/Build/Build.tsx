import { Button, message, Steps } from 'antd'
import React, { useState } from 'react'
import Details from './Details'
import LessonBuild from './LessonBuild'
import Publish from './Publish'

const {Step} = Steps

export default function Build() {

    const [current, setCurrent] = useState<number>(0)
    const [id, setId] = useState<number>(-1)

    function next() {
        let next = current + 1
        /* Uncomment when ready for form validation
        if (current === 0) {
            const t = localStorage.getItem('courseTitle')
            const d = localStorage.getItem('courseDescription')
            if (t == null || t.length === 0) {
                message.warning("Please enter a title")
                next = 0
            }
            if (d == null || d.length === 0) {
                message.warning("Please add a description")
                next = 0
            }
        } */
        setCurrent(next)
    }

    function saveDetails() {
        // TODO: add error handling here...
        if (id != -1) {
            // This means the course was already created and the user went back... 
            // so maybe change this to a request that then updates the title
            // however for now we will do nothing
            return;
        }
        
        const data = {
            title: localStorage.getItem('courseTitle'),
            description: localStorage.getItem('courseDescription')
        }
        let initData = {
            body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
        }
        fetch('/course/', initData).then(res => res.json())
        .then((id) => {setId(id); console.log(id)})
        .catch(error => console.error(error))
    }


    const steps = [
        {
            title: 'Course Details',
            id: 'course',
            content: <Details onUnmount={saveDetails}/>,
        },
        {
            title: 'Lesson Builder',
            id: 'lesson',
            content: <LessonBuild />
        },
        {
            title: 'Review & Publish',
            id: 'review',
            content: <Publish />
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
             <div className="steps-action" style={{float: 'right', marginLeft: '3rem'}}>
                {current > 0 && (
                    <Button onClick={() => setCurrent(current - 1)}>
                    Previous
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Published!')} style={{ marginLeft: 8 }}>
                    Publish
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