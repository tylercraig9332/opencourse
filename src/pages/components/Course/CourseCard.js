import React, { Component } from 'react';
import {
  Card,
  //CardImg,
  CardBody,
  CardHeader,
  CardFooter,
  Tooltip,
} from 'reactstrap';

import {
  Button
} from 'antd';

import Tag from './Tag.js';
import Icon from '../util/Icon.js';


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
    let authorEdit = (this.props.item.author === this.props.uid) ?
        <span style={icon}><Icon type="edit" action={this.editCourse} /></span> // the span allows for me to move it to the right of the card
       :
        <span style={icon}><Icon type="user" action={this.viewCourse} /></span>

    let tags = this.props.item.tags.map((tagName) => {
      return (
        <Tag key={tagName} color="primary" value={tagName} />
      )
    })

    // TODO: remove the edit for those who don't have access to editing it
    return(
      <div style={cardStyle}>
        <Card style={cardDim} actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
        <CardHeader>
        <h5>{this.props.item.title}
        {authorEdit}
        <a onClick={this.updateFavorite}>{fav}</a></h5>
        <Tooltip placement="top" target={`fave-${this.props.item.id}`} isOpen={this.state.favOpen} toggle={this.favoriteTip}>Toggle Favorite</Tooltip>
        </CardHeader>
        <CardBody>
          <h6>{this.props.item.description}</h6>
          <hr></hr>
          <p style={tag}>Tags: {tags}</p>
        </CardBody>
        <CardFooter>
          <Button onClick={this.viewCourse} type="primary" block>Preview</Button>
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
  marginLeft: '.5em',
  color: 'green',
  marginTop: 3,
  fontSize: '.85em'
}

const icon = {
  float: 'right'
}

const tag = {
  position: 'absolute',
  bottom: 55
}
