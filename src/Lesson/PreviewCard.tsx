import React, { useState } from 'react'
import { PreviewCardProps } from '../@types/Props'
import VideoCard from './Cards/VideoCard'
import LectureCard from './Cards/LectureCard'


export default function PreviewCard(props : PreviewCardProps) {

    function onClickEmpty() {} // This is necessary to prevent erros with TS when there is no onClick

    if (props == undefined) return null
    let toolbar = (props.toolbar != undefined) ? props.toolbar : true
    let onClick = (props.onClick != undefined) ? props.onClick : onClickEmpty
    switch (props.lesson.type) {
        case 'lecture':
            return <LectureCard lesson={props.lesson} toolbar={toolbar} onClick={onClick}/>
        case 'video':
            return <VideoCard lesson={props.lesson} toolbar={toolbar} onClick={onClick}/>
        default:
            return null
    }
    
}