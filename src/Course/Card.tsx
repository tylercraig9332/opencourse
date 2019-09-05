import React from 'react';

export default function Card(props: any) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  )
  
}