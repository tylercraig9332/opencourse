import React from 'react'
import {PreviewCardProps} from '../../@types/Props'

import { LikeIcon, CommentIcon } from './CardToolbar'
import { Card } from 'antd'

const { Meta } = Card

export default function LectureCard(props : PreviewCardProps) {
    return (
        <Card style={cardStyle}
        actions={[
            <CommentIcon />,
            <LikeIcon />
        ]}
        cover={<img alt={props.lesson.name} style={{maxWidth: '100%', height: '300px'}} src={'/static/waves'}/>}>
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