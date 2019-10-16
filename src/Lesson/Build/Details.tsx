import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
//import Tags from './Tags'

const { TextArea } = Input
export default function Details(props : any) {

    const [title, setTitle] = useState<string>('')

    const [description, setDescription] = useState<string>('')

    function handleFormChange(event : any) : any {
        let t = event.target.name === 'title' ? event.target.value : title
        let d = event.target.name === 'description' ? event.target.value : description
        setTitle(t)
        setDescription(d)
    }

    useEffect(() => {
        // on unmount we wanna save our data/state to the db, 
        // meaning that when next is clicked from the parent we save what's in localStorage
        localStorage.setItem('lessonTitle', title)
        localStorage.setItem('lessonDescription', description)
    }, [title, description])

    useEffect(() => {
        // TODO:
        // also load in data on mount if its in local storage
        // and delete data from local storage when course is submited.
        return function unmount() {
            // TODO: uncomment this when ready to link to db
            //return props.onUnmount()
        }
    }, [])


    return (
        <div style={container}>
            <form onChange={handleFormChange} style={{width: 500}}>
                <h2 style={{color: 'dimgrey'}}>Lesson Details</h2>
                <Input name="title" placeholder="Lesson Title" style={formItem}/>
                <TextArea name="description" placeholder="description" autosize={{ minRows: 2, maxRows: 6 }} style={formItem}/>
            </form>
        </div>
    )
}

const container = {
    marginLeft: '10%'
}

const formItem = {
    marginBottom: 8
}