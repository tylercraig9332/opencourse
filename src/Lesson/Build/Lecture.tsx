import React, { useEffect, useState } from 'react'
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import Toolbar from './Toolbar/Toolbar'

 
export default function Lecture(props : any) {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())
    const [focus, setFocus] = useState<boolean>(false)
    // I'm not certain on the ref type
    //const editorRef = (ref : any) => editorState = ref

    useEffect(() => {
        let es = editorState
        if (props.lesson.content != undefined && props.lesson.content !== '') {
            console.log(props.lesson.content)
            const cs = convertFromRaw(JSON.parse(props.lesson.content))
            es = EditorState.createWithContent(cs)
        }
        setEditorState(es)
    }, [])

    useEffect(() => {
        const raw = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        let l = Object.assign({}, props.lesson)
        l.content = raw
        props.setLesson(l)
    }, [editorState])
    
    // TODO: I would like to add an onEnter macro that will create a new block
    return (
        <div style={container}>
            <h3 style={{color: 'dimgray'}}>Lesson</h3>
            <Toolbar setEditorState={(eState : EditorState) => setEditorState(eState)} getEditorState={() => editorState} />
            <div style={focus ? editOn : editOff}>
            <Editor
                editorState={editorState} 
                onChange={(eState) => setEditorState(eState)}
                onFocus={() => setFocus(true)}
            />
            </div>
        </div>)
}

const container = {

}

const editOn = {
    padding: 10,
    border: '1px solid',
    borderRadius: 5,
    borderColor: '#1890FF',
    cursor: 'text'

}

const editOff = {
    padding: 10,
    border: 'solid 1px gray',
    borderRadius: 5,
    cursor: 'text'
}