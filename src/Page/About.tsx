import React from 'react'
import './about.css'

function Title(props : {children: React.ReactChildren | string}) {
    return (
        <div className="title">
            <span className="h">{props.children}</span>
        </div>
    )
}

export default function About() {
    return (
            <div style={container}>
                <Title>Open Learning</Title>
                <div style={{backgroundColor: 'grey', margin: '0px', left: 0}}>
                    <div style={{width: '100%', overflow:'hidden', margin:0, marginLeft: 'auto', marginRight: 'auto'}}><img className="lib" src={"/open_learning.jpg"} ></img></div>
                </div>
                <Title>Accessible Discovery</Title>
                <div style={{backgroundColor: 'grey', margin: '0px', left: 0}}>
                    <div style={{width: '100%', overflow:'hidden', margin:0, marginLeft: 'auto', marginRight: 'auto'}}><img className="moon" src={"/static/moon"} ></img></div>
                </div>
                <Title>Boundless Collaboration</Title>
                <div style={{backgroundColor: 'grey', margin: '0px', left: 0}}>
                    <div style={{width: '100%', overflow:'hidden', margin:0, marginLeft: 'auto', marginRight: 'auto'}}><img className="moon" src={"/static/collab.jpg"} ></img></div>
                </div>
                <Title>Endless Exploration</Title>
                <div style={{backgroundColor: 'grey', margin: '0px', left: 0}}>
                    <div style={{width: '100%', overflow:'hidden', margin:0, marginLeft: 'auto', marginRight: 'auto'}}><img className="explore" src={"/static/explore.jpg"} ></img></div>
                </div>
            </div>
    )
}

const container = {
    display: 'flex', alignItems: 'center', color: 'dimgray', flexDirection: 'column'
}   as React.CSSProperties
