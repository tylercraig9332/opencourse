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
    //console.log(this.props.data)
  }


  render() {
    //console.log(this.props.data)




//figured out how to iterate over an array. But we still need to figure out how
//but our courses data inside
    return(
      <div>
        <Card>
        <CardBody>
          <CardTitle >{this.props.item.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
        </Card>
      </div>
    )
  }
}
