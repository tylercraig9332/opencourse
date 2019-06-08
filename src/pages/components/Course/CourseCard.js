import React, { Component } from 'react';
import {
  Card,
  //CardImg,
  CardBody,
  CardHeader,
  CardFooter,
  CardSubtitle,
  CardText,
  Button,
  ButtonGroup,
  Tooltip,
  Badge
} from 'reactstrap';

import Tag from './Tag.js';


export default class CourseCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorite: props.favorite,
      favOpen: false
    }

    this.viewCourse = this.viewCourse.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
    this.favoriteTip = this.favoriteTip.bind(this);
  }

  componentDidMount(){
    //console.log(this.props.item)
  }

  viewCourse() {
    window.location.href = "/course/" + this.props.item.id;
  }

  editCourse() {
    window.location.href = '/editcourse/' + this.props.item.id;
  }

  updateFavorite() {
    this.setState({favorite: !this.state.favorite});
    // TODO: change this in the database
  }

  favoriteTip() {
    this.setState({favOpen: !this.state.favOpen})
  }

  render() {
    let fav = (this.state.favorite) ?
                <i style={favorite} className="fas fa-star" id={`fave-${this.props.item.id}`}></i>
              :
                <i style={favorite} className="far fa-star" id={`fave-${this.props.item.id}`}></i>


    /*let tooltip = (this.state.favorite) ?
        <Tooltip placement="top" target={`fave-${this.props.item.id}`} isOpen={this.state.favOpen} toggle={this.favoriteTip}>Remove from favorites</Tooltip>
      :
        <Tooltip placement="top" target={`unfave-${this.props.item.id}`} isOpen={this.state.favOpen} toggle={this.favoriteTip}>Add to favorites</Tooltip>
    */ // TODO: This breaks everything for some reason
    let buttonGroup = (this.props.item.author === this.props.uid) ?
      (<ButtonGroup>
        <Button onClick={this.editCourse} color="secondary" outline>Edit <i className="far fa-edit"></i></Button>
        <Button onClick={this.viewCourse} color="primary" outline>Preview <i className="far fa-share-square"></i></Button>
      </ButtonGroup>) :
      <ButtonGroup><Button onClick={this.viewCourse} color="primary" outline>Preview <i className="far fa-share-square"></i></Button></ButtonGroup>

    let tags = this.props.item.tags.map((tagName) => {
      return (
        <Tag color="primary" value={tagName} />
      )
    })

    // TODO: remove the edit for those who don't have access to editing it
    return(
      <div style={cardStyle}>
        <Card style={cardDim}>
        <CardHeader>
        {this.props.item.title}
        <a onClick={this.updateFavorite}>{fav}</a>
        <Tooltip placement="top" target={`fave-${this.props.item.id}`} isOpen={this.state.favOpen} toggle={this.favoriteTip}>Toggle Favorite</Tooltip>
        </CardHeader>
        <CardBody>
          <h6>{this.props.item.description}</h6>

          <p style={{position: 'absolute', bottom: 55}}><hr></hr>Tags: {tags}</p>
        </CardBody>
        <CardFooter>
          {buttonGroup}
        </CardFooter>
        </Card>
      </div>
    )
  }
}

const cardStyle = {
  padding: 10,
}

const cardDim = {
  width: 350,
  height: 300
}

const favorite = {
  float: 'right',
  color: 'green',
  marginTop: 3
}
