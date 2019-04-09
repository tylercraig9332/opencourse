import React, { Component } from 'react';
import {
  Card,
  //CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';


export default class CourseCard extends Component {


  componentDidMount(){
    //console.log(this.props.item)
  }


  render() {
    //console.log(this.props.data)




//figured out how to iterate over an array. But we still need to figure out how
//but our courses data inside
    return(
      <div>
        <Card>
        <CardBody>
          <CardTitle>Title: {this.props.item.title}</CardTitle>
          <CardSubtitle>Tags: {this.props.item.tags}</CardSubtitle>
          <CardText>Description: {this.props.item.description}</CardText>
          <Button>Button</Button>
        </CardBody>
        </Card>
      </div>
    )
  }
}
