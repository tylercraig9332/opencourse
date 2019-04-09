import React, {Component} from 'react';
import {withFirebase} from '../components/Firebase';
import Navbar from '../components/Navbar.js';

import CourseCard from '../components/CourseCard.js'
import {
  Container,
  Row,
  Col
} from 'reactstrap';


class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      loading: false,
      cart: [],
      shop: [
            {id: 35, name: 'jumper', color: 'red', price: 20},
            {id: 42, name: 'shirt', color: 'blue', price: 15},
            {id: 56, name: 'pants', color: 'green', price: 25},
            {id: 71, name: 'socks', color: 'black', price: 5},
            {id: 72, name: 'socks', color: 'white', price: 5},
      ]
    };
    //this.docRef = this.docRef.bind(this)
  }

  componentDidMount() {
    this.setState({loading: true})
    this.load()
  }

  load() {
    let c = []
    this.docRef = this.props.firebase
    this.docRef.firestore().collection('courses').onSnapshot(snap => {
      snap.forEach(doc => {
        c.push({...doc.data()})
        c[c.length - 1].id = doc.id
    })
      this.setState({courses: c})
    });
    this.setState({loading: false})
  }

  componentDidUnMount() {
    this.docRef()
  }

  render() {
//figured out how to iterate over an array. But we still need to figure out how
//but our courses data inside

    let courses = this.state.courses.map((course) =>
      <CourseCard item={course} key={course.title} />
    )
    return (
      <div>
        <Navbar />
        <Container>
        <Row>
        <Col>
          <div>
          <Row>
            {courses}
            </Row>
          </div>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withFirebase(Courses);
