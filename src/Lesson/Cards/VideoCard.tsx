import React, { useState, useEffect } from 'react'
import { PreviewCardProps } from '../../@types/Props'

import Video from '../VideoPlayer'
import { LikeIcon, CommentIcon } from './CardToolbar'

import { Card, Icon, Dropdown, Menu, message } from 'antd'

const { Item }  = Menu

export default function VideoCard(props : PreviewCardProps) {

    const [modal, setModal] = useState<boolean>(true)

    const menu = (
        <Menu>
            <Item>
                <a target="_blank" href={JSON.parse(props.lesson.content).videoLink}>Open in YouTube</a>
            </Item>
            <Item>
                <a href={`/lessons/build/${props.lesson.id}`}>Edit Lesson</a>
            </Item>
        </Menu>
    )
    const drop = (
        <Dropdown overlay={menu}>
            <Icon type="ellipsis" style={{fontSize: '24px'}} key="s" onClick={() => setModal(true)}/>
        </Dropdown>
    )

    return (
        <Card title={props.lesson.name} 
        extra={drop} 
        style={cardStyle}
        actions={(props.toolbar) ? [
            <CommentIcon />,
            <LikeIcon />
        ] : undefined}>
            <Video videoID={JSON.parse(props.lesson.content).videoID} visible/>
        </Card>
    )
}

const cardStyle = {
    width: 500,
    //height: 500,
    margin: 20
}