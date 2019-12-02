import React from 'react'
import {PreviewCardProps} from '../../@types/Props'

import { LikeIcon, CommentIcon, ContextMenuIcon } from './CardToolbar'
import { Card } from 'antd'

const { Meta } = Card

export default function LectureCard(props : PreviewCardProps) {
    return (
        <Card style={cardStyle}
        actions={(props.toolbar) ? [
            <ContextMenuIcon id={props.lesson.id} />,
            <CommentIcon />,
            <LikeIcon />
        ] : undefined}
        cover={<img alt={props.lesson.name} style={{maxWidth: '100%', height: '300px'}} src={props.lesson.preview}/>} 
        onClick={() => props.onClick(props.lesson)}
        hoverable>
            <Meta title={props.lesson.name} description={props.lesson.description} />
        </Card>
    )
}

const cardStyle = {
    width: 400, 
    margin: 25,
    maxHeight: 500,
    textOverflow: 'ellipsis'
} as React.CSSProperties 