import React, { useState } from 'react'
import { PreviewCardProps } from '../@types/Props'
import VideoCard from './Cards/VideoCard'
import LectureCard from './Cards/LectureCard'


export default function PreviewCard(props : PreviewCardProps) {

    if (props == undefined) return null
    switch (props.lesson.type) {
        case 'lecture':
            return <LectureCard lesson={props.lesson} />
        case 'video':
            return <VideoCard lesson={props.lesson} />
        default:
            return null
    }
    
}