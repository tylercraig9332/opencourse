import { Button, Card, Collapse, Input, Modal, Timeline } from 'antd'
import React, { useEffect, useReducer, useState } from 'react'

const { Panel } = Collapse
const {TextArea} = Input

function reducer(state : any, action : any) : any {
      console.log(action)
      console.log(state.chapters)
      let identifier = -1
      if (action.includes('-')) {
        let commands = action.split('-')
        action = commands[0]
        identifier = Number(commands[1])
      }
      switch (action) {
        case 'NEWCHAPTER':
          state.chapters.push({
            name: 'New Chapter',
            description: 'new chapter',
            lessons: [],
            key: state.chapters.length
          })
        break;
        case 'NEWLESSON':
          if (identifier != -1) {
            state.chapters[identifier].lessons.push({
              name: 'New Lesson',
              description: 'New Lesson',
              type: 'lecture',
              key: state.chapters[identifier].lessons.length
            })
          }
        break;
      }
      // Returns a new state with the above changes 
      return Object.assign({}, state)
}

export default function CourseBuild(props : any) {

    const init = {
      chapters: [
        { // chapter 1
          name: 'Chapter 1',
          description: 'This is the first chapter',
          lessons: [
            { // Lesson 1
              name: 'Lesson 1',
              description: 'This is the first lesson',
              type: 'lecture',
              key: 0
            }
          ],
          key: 0
        }
      ]
    }

    const [state, dispatch] = useReducer(reducer, init)
    const [chapModal, setChapModal] = useState<boolean>(false)

    useEffect( () => {
      console.log(state)
    }, [state])

    const chapterModal = (
      <Modal
        title="Edit Chapter Details"
        visible={chapModal}
        onCancel={() => setChapModal(false)}
        onOk={() => setChapModal(false)}
        footer={[
          <Button key="Ok" type="primary" onClick={() => setChapModal(false)}>Ok</Button>
        ]}
      >
        <div style={container}>
          <span>Chapter Title</span>
          <Input onChange={() => dispatch('CHAPTER-TITLE')} id={`chapterTitle-${state.lastKey}`} /*value={(state.chapters != undefined || false) ? state.chapters[state.lastKey].title : ""} *//>
        </div>
        <div style={container}>
          <span>Chapter Description</span>
          <TextArea onChange={undefined} id={`chapterDesc-${/*state.lastKey*/undefined}`} /*placeholder={(state.chapters != undefined || false) ? state.chapters[state.lastKey].desc : ""}*/ />
        </div>
      </Modal>
    )

    let panels = undefined
    if (state != undefined) {
      panels = state.chapters.map((chapter : any, i : number) => {
        return (
          <Panel header={chapter.name} key={i}>
            <h3 onClick={() => setChapModal(true)}style={dimgrey}>{chapter.name} <i id={chapter.key} className="fas fa-edit fa-xs" /></h3>
            <p onClick={() => setChapModal(true)} style={dimgrey}>{chapter.description}</p>
            {chapterModal}
            <br></br>
            <Timeline>
              {chapter.lessons.map((lesson : any, index : number) => {
                console.log(lesson)
                return (
                  <Timeline.Item key={index}>
                    <Card title={lesson.name} key={lesson.key}>
                      <div id={`lessonDesc-${index}`} onClick={undefined}>{lesson.description}</div>
                    </Card>
                  </Timeline.Item>
                )
              })}
              <Button type="primary" onClick={() => dispatch('NEWLESSON-' + i)} id={chapter.key}>Add Lesson</Button>

            </Timeline>
          </Panel>
        )
      })
    }



    return (
      <div className="container" style={container}>
        {chapModal}
        <Collapse defaultActiveKey={[0]}>
          {panels}
        </Collapse>
        <Button type="primary" ghost block style={{marginTop: 5}} onClick={() => dispatch('NEWCHAPTER')}>Add Chapter</Button>
      </div>)
}


// Styles
const container = {
  marginBottom: 10
}

const dimgrey = {
  color: 'dimgrey'
}