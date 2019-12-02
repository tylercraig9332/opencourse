import React, { useState, useEffect } from 'react'
import { ILesson } from '../../@types/Interface'

import { attachLesson, fetchAttachments } from '../../api/lesson'

import PreviewCard from '../../Lesson/PreviewCard'
import ListView from '../../Lesson/ListView'

import CardButton from '../../Util/CardButton'
import { Timeline, Button, Icon, Modal } from 'antd'
const { Item } = Timeline
const { confirm } = Modal

/* Lesson Timeline Props */
type LTProps = {
    chapterID : number | string | undefined,
    courseID : number | string | undefined
}

export default function LessonTimeline(props : LTProps) {

    const [lessons, setLessons] = useState<ILesson[]>([])
    const [addModal, setAddModal] = useState<boolean>(false)
    const [editView, setEditView] = useState<boolean>(false)
    const [editViewLesson, setEditViewLesson] = useState<ILesson>()
    const [importView, setImportView] = useState<boolean>(false)

    useEffect(() => {
        fetchAttachments(Number(props.courseID), Number(props.chapterID)).then((r : any) => r.json())
        .then((l : ILesson[]) => {
            //console.log(l)
            setLessons(l)
        })
    }, [])

    function addLesson() : void {
        // TOOD: handle redirect and request to make a new lesson with this chapter and course id
        console.log("new")
    } 

    function importLesson(lesson : ILesson) {
        setAddModal(false)
        setImportView(false)
        let l = [...lessons]
        l.push(lesson)
        setLessons(l)
        // Attaches the lesson to the course and chapter
        attachLesson(Number(lesson.id), Number(props.courseID), Number(props.chapterID))
    }

    function removeLesson(lesson : ILesson) {
        setEditView(false)
        console.log("attempting to remove lesson: ", lesson.id)
        const l = lessons.filter((item) => item.id !== lesson.id)
        setLessons(l)
        attachLesson(Number(lesson.id), -1, -1)
    }

    const importModal = (
        <Modal visible={importView} onCancel={() => setImportView(false)} onOk={() => setImportView(false)} width={'80%'}>
            <ListView fetchString="yours" title="Select Lesson to Import" onClick={(e : any) => importLesson(e)} toolbar={false}/>
        </Modal>
    )

    const removeModal = (lesson : ILesson) => {
        confirm({
            title: 'Are you sure you want to remove this lesson?',
            content: 'Your lesson will not be deleted, but it will no longer be associated with this chapter or course',
            onOk() {removeLesson(lesson)},
            onCancel() {},
        });
    }

    const editModal = (
        <Modal visible={editView} onCancel={() => setEditView(false)} onOk={() => setEditView(false)}>
            <div style={row}>
                <CardButton icon="edit" onClick={() => window.location.href = '/lessons/build/' + editViewLesson!.id}>Edit Lesson</CardButton>
                <CardButton icon="delete" onClick={() => removeModal(editViewLesson!)}>Remove Lesson</CardButton>
            </div>
        </Modal>
    )

    const lessonItems = lessons.map((lesson : ILesson, i : number) => {
        let dot
        if (lesson.type === 'video') {
            dot = <Icon type="youtube" style={{fontSize: '16px', color: 'red'}} />
        } else if (lesson.type === 'game') {
            dot = <Icon type="play-circle" style={{fontSize: '16px', color: 'green'}} />
        } else {
            dot = ''
        }
        return <Item dot={dot} key={lesson.name}>
            <PreviewCard lesson={lesson} toolbar={false} onClick={(l : ILesson) => {setEditView(true); setEditViewLesson(l)}}/>
        </Item>
    })

    return (
        <Timeline>
            {lessonItems}
            {importModal}
            {editModal}
            <Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                <Modal visible={addModal} onCancel={() => setAddModal(false)} onOk={() => setAddModal(false)}>
                    <div style={row}>
                        <CardButton icon="form" onClick={addLesson}>Create New Lesson</CardButton>
                        <CardButton icon="login" onClick={() => setImportView(true)}>Import Lesson</CardButton>
                    </div>
                </Modal>
                <div className="addLesson">
                    <Button style={{width: 300}} onClick={() => setAddModal(true)}>Add Lesson</Button>
                </div>
            </Item>
        </Timeline>
    )
}

const row = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
} as React.CSSProperties

