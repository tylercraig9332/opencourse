import React, { useState, useEffect } from 'react'

import {
    Input,
    Row,
    Col,
    Button,
    message
} from 'antd'

const { TextArea } = Input

export default function Details(props : any) {
    const [editView, setEditView] = useState<boolean>(true)

    const {courseName, courseDesc} = props

    useEffect(() => {
        let errorFlip = editView
        // On change to show, ensure that courseName and courseDesc are not empty.
        if (!editView) {
            if (courseName === '' || courseDesc === '') {
                message.info('Please ensure that course name and course description are not empty.')
                errorFlip = !editView
            }
        }
        setEditView(errorFlip)
    }, [editView])

    const detailsHeader = (editView) ? (
        <React.Fragment>
            <h3 className="dg">Details</h3>
            <br></br>
            <Row ><Col span={3}>Course Name:</Col><Col span={12}><Input size="large" value={courseName} onChange={(e) => props.setName(e.currentTarget.value)} /></Col></Row>
            <br></br>
            <Row ><Col span={3}>Course Description:</Col><Col span={12}> <TextArea autoSize={{minRows: 2, maxRows: 6}} value={courseDesc} onChange={(e) => props.setDesc(e.currentTarget.value)}/></Col></Row>
            <br></br>
            <Row><Col span={3}></Col><Col span={12}><Button type="default" onClick={() => setEditView(false)} block>Save Details</Button></Col></Row>
        </React.Fragment>
    ) :
    (
        <React.Fragment>
            <h3 className='dg '>Details</h3>
            <br></br>
            <Row ><Col span={3}>Course Name:</Col><Col span={12}><h4 className="dg">{courseName}</h4></Col></Row>
            <br></br>
            <Row ><Col span={3}>Course Description:</Col><Col span={12}><p>{courseDesc}</p></Col></Row>
            <br></br>
            <Row><Col span={3}></Col><Col span={12}><Button type="default" onClick={() => setEditView(true)} block>Edit Details</Button></Col></Row>
        </React.Fragment>
    )

    return detailsHeader
}