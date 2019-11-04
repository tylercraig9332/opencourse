import React, { useState } from 'react'
import {IChapter, ILesson} from '../../@types/Interface'
import './build.css'

import Tippy from '@tippy.js/react'

import { Button, Modal, Input } from 'antd'
const {TextArea} = Input

type ChapterProps = {
    chapter: IChapter,
    setChapter(c : IChapter): void
}

export default function Chapter(props : ChapterProps) {

    const {name, description, lessons} = props.chapter

    const [editModal, setEditModal] = useState<boolean>(false)

    function updateChapter(name : string, desc : string, lessons : ILesson[]) {
        let c = Object.assign({}, props.chapter)
        c.name = name
        c.description = desc
        c.lessons = lessons
        props.setChapter(c)
    }

    function addLesson() : void {
        let l = [...lessons]
        const num = l.length
        l.push({
            name: 'Lesson ' + num,
            description: 'edit me...',
            type: '',
            data: {}
        })
        updateChapter(name, description, l)
    } 

    function editChapter(event : any) : void {
        const id = event.currentTarget.id 
        let n = name
        let d = description
        if (id === 'chName') {
            n = event.currentTarget.value
        }
        else if (id === 'chDesc') {
            d = event.currentTarget.value
        }
        updateChapter(n, d, lessons)
    }


    const chapterModal = (
        <Modal
          title="Edit Chapter Details"
          visible={editModal}
          onCancel={() => setEditModal(false)}
          onOk={() => setEditModal(false)}
          footer={[
            <Button key="Ok" type="primary" onClick={() => setEditModal(false)}>Ok</Button>
          ]}
        >
          <div style={container}>
            <span>Chapter Name</span>
            <Input onChange={editChapter} id={`chName`} value={name}/>
          </div>
          <div style={container}>
            <span>Chapter Description</span>
            <TextArea onChange={editChapter} id={`chDesc`} value={description} />
          </div>
        </Modal>
      )

    return (
        <div style={container}>
            <h3 className="dg">
            {chapterModal}
            {name}  <Tippy content={<div>Edit name and description</div>}>
                        <span><Button shape="circle" onClick={() => setEditModal(true)}><i className="fas fa-edit"></i></Button></span>
                    </Tippy>
            </h3>
            <p>{description}</p>

            {/* LESSONS MAP HERE */}
            <div className="addLesson">
                <Tippy content={<div>Add Lesson</div>} arrow={true}>
                    <span><Button block onClick={addLesson}><i className="fas fa-plus"></i></Button></span>
                </Tippy>
            </div>
            <hr style={{width: 100}}></hr>
        </div>
    )
} 

const container = {
    paddingBottom: 20,
    paddingRight: 20
}