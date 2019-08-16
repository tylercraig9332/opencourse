import React from 'react';

export default function Tag(props:any) {
  
    return (
      <span style={tagStyle}>
        <a href={`./courses/tag/${props.value}`}>
          <span className={'badge badge-'+ props.color}>{props.value}</span>
        </a>
      </span>
    )
}

const tagStyle = {
  marginRight: 3
};
