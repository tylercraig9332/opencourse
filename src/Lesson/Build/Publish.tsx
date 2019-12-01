import React from 'react'
import PreviewCard from '../PreviewCard'

export default function Publish(props : any) {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h4 style={{color: 'dimgray'}}>Lesson Card Preview</h4>
            <hr style={{width: 200}}></hr>
            <PreviewCard lesson={props.lesson} toolbar={false}/>
        </div>)
}