import React, { Component } from 'react';

import {
  Collapse,
  Button,
  Card,
  Timeline,
  Icon
} from 'antd';

import { withFirebase } from '../components/Firebase';

//mport NewLesson from '../components/EditCourse/NewSection.js';

const { Panel } = Collapse;

class CourseBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapters: [
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
      ],
    }
    this.id = props.location.pathname.split('/')[2]

    this.onChange = this.onChange.bind(this)
    this.toggleInput = this.toggleInput.bind(this)
    this.addChapter = this.addChapter.bind(this)
    this.addLesson = this.addLesson.bind(this)
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
      console.log(this.state)
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
          console.log(event.target.value)
        break;
      case 'chapterDesc':
          console.log(event.target.value)
        break;
      default:
        console.log("This may be an error: " + event.target.id)
      
    }
  }

  toggleInput(event) {
    console.log(event.target.id)
  }

  addChapter() {
    let c = [...this.state.chapters]
    c.push({
      title: `Chapter ${c.length + 1}`,
      desc: 'Click to edit',
      lessons: [],
      key: c.length
    })
    this.setState({chapters: c})
  }

  addLesson(event) {
    console.log(event)
    let l = [...this.state.chapters[event.target.id].lessons]
    l.push({
      title: `Lesson ${l.length + 1}`,
      desc: 'New lesson',
      type: 'note',
      key: l.length
    })
    let c = [...this.state.chapters]
    c[event.target.id].lessons = l
    this.setState({
      chapters: c
    })
  }


  render() {

    let panels = this.state.chapters.map((chapter, i) => {
      console.log("maped!")
      return (
        <Panel header={chapter.title} key={i}>
          <h3>{chapter.title}</h3>
          <h6>{chapter.desc}</h6>
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
          <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }}/>}>
            <Button type="primary" onClick={this.addLesson} id={chapter.key}>Add Lesson</Button>
          </Timeline.Item>
          </Timeline>
        </Panel>
      )
    })

    return (
      <div>
        <div style={editStyle}>
        <h1 style={{color: 'dimgrey'}} >Course Creation</h1>
        <h6 style={{color: 'dimgrey'}}> Set up the structure and content of your course</h6>
        <br></br>
        <Collapse >
          {panels}
        </Collapse>
        <Button type="primary" size="large" style={buttonStyle} onClick={this.addChapter}>Add Chapter</Button>
        </div>
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
