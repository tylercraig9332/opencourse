import React, { useEffect, useState } from "react";
import Icon from '../Util/Icon';
import './Card.css';
import Tag from './Tag';

export default function Card() {
  const [favorite, setFavorite] = useState(true);
  const [favOpen, setFavOpen] = useState(false);
  const [tags, setTags] = useState([
    "test1",
    "test2",
    "this is yet another test",
    "really another?"
  ]);

  useEffect(() => {});

  //STYLING START!!
  const favoriteStyle = {
    marginLeft: ".5em",
    color: "green",
    marginTop: 3,
    fontSize: ".85em"
  };
  const cardStyle = {
    padding: 10
  };

  const cardDim = {
    width: 350,
    height: 300
  };

  const icon = {
    float: "right"
  };

  const tag = {
    position: "absolute",
    bottom: 55
  };

  //STYLING END

  let fav = favorite ? (
    <i style={favoriteStyle} className="fas fa-star" id={`1`} />
  ) : (
    <i style={favoriteStyle} className="far fa-star" id={`2`} />
  );

  let authorEdit =
    "CONNOR" === "CONNOR" ? (
      <span className="icon">
        <Icon type="edit" action={editCourse} />
      </span> // the span allows for me to move it to the right of the card
    ) : (
      <span className='icon'>
        <Icon type="user" action={viewCourse} />
      </span>
    );

  let tempTags = tags.map((tagName: any) => {
    return <Tag key={tagName} color="primary" value={tagName} />;
  });
  
  function editCourse() {
    window.location.href = "/editcourse/" + '2';
  }
  function viewCourse() {
    window.location.href = "/course/" + '1';
  }

  return (
    <div style={cardStyle}>
      <div className="card" style={cardDim}>
        <div className="card-header">
          <h5>
            {"this is a test title"}
            {"this is a test author"}
            <a onClick={() => setFavorite(!favorite)}>{fav}</a>
          </h5>
          <div data-toggle="tooltip" data-placement="top">
            Toggle Favorite
          </div>
        </div>
        <div className="card-body">
          <h6>{"this is a test description"}</h6>
          <hr />
          <p>Tags: this is a test tag</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
