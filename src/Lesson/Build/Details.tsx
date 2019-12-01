import { Input } from 'antd'
import React from 'react'
//import Tags from './Tags'
import Preview from '../../Util/Preview'
import { savePreview } from '../../api/lesson'

const { TextArea } = Input
export default function Details(props : any) {

    function handleFormChange(event : any) : any {
        let l = Object.assign({}, props.lesson)
        l.name = event.target.name === 'title' ? event.target.value : props.lesson.name
        l.description = event.target.name === 'description' ? event.target.value : props.lesson.description
        props.setLesson(l)
    }

    function handlePreviewChange(uri : string) {
        let l = Object.assign({}, props.lesson)
        l.preview = uri
        props.setLesson(l)
        savePreview(props.lesson.id, uri)
    }

    return (
        <div style={container}>
            <form onChange={handleFormChange} style={{width: 500}}>
                <h2 style={{color: 'dimgrey'}}>Lesson Details</h2>
                <Input name="title" value={props.lesson.name} style={formItem}/>
                <TextArea name="description" value={props.lesson.description} autoSize={{ minRows: 2, maxRows: 6 }} style={formItem}/>
            </form>
            <Preview savePreview={handlePreviewChange} preview={props.lesson.preview}/>
        </div>
    )
}

const container = {
    marginLeft: '10%'
}

const formItem = {
    marginBottom: 8
}