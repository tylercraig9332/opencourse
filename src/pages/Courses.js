import React, {Component} from 'react';
import {withFirebase} from '../components/Firebase';
import Navbar from '../components/Navbar.js';

import CourseCard from '../components/CourseCard.js'

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
    let c = [];
    this.docRef = this.props.firebase
     this.docRef.firestore().collection('courses').onSnapshot(snap => {
       snap.forEach(doc =>
       c.push({...doc.data()}))
     });
     this.setState({
       courses: c
     })

  }

  componentDidUnMount() {
    this.docRef()
  }

  render() {
//figured out how to iterate over an array. But we still need to figure out how
//but our courses data inside
    return (
      <div>
        <Navbar />
        <div class="card-list">
          {
            this.state.shop.map((item, key) =>
              <CourseCard item={item} key={item.id} />
            )
          }
        </div>
      </div>
    );
  }
}

export default withFirebase(Courses);
