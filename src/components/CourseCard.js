import React, { Component } from 'react';
import {
  Card,
  //CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Button,
  ButtonGroup
} from 'reactstrap';


export default class CourseCard extends Component {

  constructor() {
    super();

    this.viewCourse = this.viewCourse.bind(this);
  }

  componentDidMount(){
    //console.log(this.props.item)
  }

  viewCourse() {
    window.location.href = "/course/" + this.props.item.id;
  }


  render() {
    //console.log(this.props.data)
    // TODO: remove the edit for those who don't have access to editing it
    return(
      <div style={cardStyle}>
        <Card>
        <CardBody>
          <CardTitle>Title: {this.props.item.title}</CardTitle>
          <CardSubtitle>Tags: {this.props.item.tags}</CardSubtitle>
          <CardText>Description: {this.props.item.description}</CardText>
          <ButtonGroup>
            <Button color="secondary" outline>Edit</Button>
            <Button onClick={this.viewCourse} color="primary" >View</Button>
          </ButtonGroup>
        </CardBody>
        </Card>
      </div>
    )
  }
}

const cardStyle = {
  width: 350
}
