import React, { useState } from 'react'
import { PreviewCardProps } from '../@types/Props'
import VideoCard from './Cards/VideoCard'
import LectureCard from './Cards/LectureCard'


export default function PreviewCard(props : PreviewCardProps) {

    if (props == undefined) return null
    let toolbar = (props.toolbar != undefined) ? props.toolbar : true
    switch (props.lesson.type) {
        case 'lecture':
            return <LectureCard lesson={props.lesson} toolbar={toolbar} onClick={props.onClick}/>
        case 'video':
            return <VideoCard lesson={props.lesson} toolbar={toolbar} onClick={props.onClick}/>
        default:
            return null
    }
    
}