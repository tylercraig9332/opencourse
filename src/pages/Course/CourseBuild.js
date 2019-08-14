import React, { Component } from 'react';

import {
  Collapse,
  Button,
  Card,
  Timeline,
  Icon,
  Modal,
  Input,
  Select
} from 'antd';

import { withFirebase } from '../components/Firebase';
import IconButton from '../components/util/Icon';
import LectureNotes from '../components/CourseBuild/LectureNotes';
import Quiz from '../components/CourseBuild/Quiz';

//mport NewLesson from '../components/EditCourse/NewSection.js';

const { Panel } = Collapse;
const { TextArea } = Input;
const { Option } = Select;

class CourseBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*chapters: [
        {
          title: 'Chapter 1',
          desc: 'Add lessons to this chapter',
          lessons: [
            {
              title: 'Lesson 1',
              desc: 'This is the first lesson',
              type: 'note',
              key: 0
            },
            {
              title: 'Lesson 2',
              desc: 'Edit lessons by clicking on text',
              type: 'note',
              key: 1
            }
          ],
          key: 0
        }
      ],*/
      editModal: false,
      lessonModal: false,
      lastKey: 0,
    }
    this.id = props.location.pathname.split('/')[2]

    this.onChange = this.onChange.bind(this)
    this.addChapter = this.addChapter.bind(this)
    this.addLesson = this.addLesson.bind(this)
    this.changeChapter = this.changeChapter.bind(this)
    this.toggleLessonRender = this.toggleLessonRender.bind(this)
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      if (auth == null)
        window.location.href = '/login';
    });
    console.log(this.id)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state != prevState) {
      //console.log(this.state)
    }
  }

  onChange(event) {
    let ids = event.target.id.split('-');
    let c = [...this.state.chapters];
    switch (ids[0]) {
      case 'lessonTitle':
        //this.setState{{}}
        console.log(event.target.value)
        break;
      case 'lessonDesc':
        console.log(event.target.value)
        break
      case 'chapterTitle':
        c[this.state.lastKey].title = event.target.value
        break;
      case 'chapterDesc':
        c[this.state.lastKey].desc = event.target.value
        break;
      default:
        console.log("This may be an error: " + event.target.id)

    }
    this.setState({ chapter: c })
  }

  addChapter() {
    let c = undefined
    if (this.state.chapters == undefined) {
      c = new Array()
    } else {
      c = [...this.state.chapters]
    }
    c.push({
      title: `Chapter ${c.length + 1}`,
      desc: 'Description of this chapter',
      lessons: [],
      key: c.length
    })
    this.setState({ chapters: c })
  }

  addLesson(event) {
    this.setState({ lessonModal: false })
    console.log(event.target)
    let l = [...this.state.chapters[this.state.lastKey].lessons]
    l.push({
      title: `Lesson ${l.length + 1}`,
      desc: 'New lesson',
      type: 'note',
      key: l.length
    })
    let c = [...this.state.chapters]
    c[this.state.lastKey].lessons = l
    this.setState({
      chapters: c
    })
  }

  changeChapter(event) {
    this.setState({ editModal: true, lastKey: Number(event.target.id) })
  }

  toggleLessonRender(option) {
    this.setState({lessonView: option})
  }



  render() {
    let panels = undefined
    if (this.state.chapters != undefined) {
      panels = this.state.chapters.map((chapter, i) => {
        return (
          <Panel header={chapter.title} key={i}>
            <h3>{chapter.title} <IconButton id={chapter.key} type="edit" action={this.changeChapter} /></h3>
            <p style={{ color: 'dimgrey' }}>{chapter.desc}</p>
            <br></br>
            <Timeline>
              {chapter.lessons.map((lesson, index) => {
                console.log(lesson)
                return (
                  <Timeline.Item key={index}>
                    <Card title={lesson.title} key={lesson.key}>
                      <div id={`lessonDesc-${index}`} onClick={this.toggleInput}>{lesson.desc}</div>
                    </Card>
                  </Timeline.Item>
                )
              })}
              <Button type="secondary" onClick={() => this.setState({ lessonModal: true, lastKey: chapter.key })} id={chapter.key} block>Add Lesson</Button>

            </Timeline>
          </Panel>
        )
      })
    }

    const editChapterModal = (
      <Modal
        title="Edit Chapter Details"
        visible={this.state.editModal}
        onCancel={() => this.setState({ editModal: false })}
        onOk={() => this.setState({ editModal: false })}
        footer={[
          <Button key="Ok" type="primary" onClick={() => this.setState({ editModal: false })}>Ok</Button>
        ]}
      >
        <div style={input}>
          <span>Chapter Title</span>
          <Input onChange={this.onChange} id={`chapterTitle-${this.state.lastKey}`} value={(this.state.chapters != undefined) ? this.state.chapters[this.state.lastKey].title : ""} />
        </div>
        <div style={input}>
          <span>Chapter Description</span>
          <TextArea onChange={this.onChange} id={`chapterDesc-${this.state.lastKey}`} placeholder={(this.state.chapters != undefined) ? this.state.chapters[this.state.lastKey].desc : ""} />
        </div>
      </Modal>
    )

    let lessonView = undefined

    switch (this.state.lessonView) {
      case 'note':
        lessonView = <LectureNotes />
        break;
      case 'quiz':
        lessonView = <Quiz />
        break;
      default:
        lessonView = undefined
      break;
    }

    const lessonModal = (
      <Modal
        title="New Lesson"
        visible={this.state.lessonModal}
        onOk={this.addLesson}
        onCancel={() => this.setState({ lessonModal: false })}
      >
        <div>
          <Select style={{width: 300}} placeholder="Select a lesson type" onChange={this.toggleLessonRender}> 
            <Option value="note">Lecture Note</Option>
            <Option value="quiz">Quiz</Option>
          </Select>
          <br></br>
          {lessonView}
        </div>
      </Modal>
    )

    return (
      <div>
        <div style={editStyle}>
          <h1 style={{ color: 'dimgrey' }} >Course Creation</h1>
          <h6 style={{ color: 'dimgrey' }}> Set up the structure and content of your course</h6>
          <br></br>
          <Collapse defaultActiveKey={['0']}>
            {panels}
          </Collapse>
          <Button type="primary" size="large" style={buttonStyle} onClick={this.addChapter} block>Add Chapter</Button>
        </div>
        {editChapterModal}
        {lessonModal}
      </div>
    );
  }

}

export default withFirebase(CourseBuild);

const editStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '55%',
  padding: '1rem'
};

const buttonStyle = {
  marginTop: '10px'
}

const input = {
  marginBottom: 16
}
