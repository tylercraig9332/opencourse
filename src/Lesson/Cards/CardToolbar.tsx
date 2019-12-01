import React, { useState, useEffect } from 'react'

import { Icon, Dropdown, Menu, message } from 'antd'


function LikeIcon() {

    const [liked, setLiked] = useState<boolean>(false)

    useEffect(() => {
        if (liked) {
            message.success('You liked this lesson!', 1)
        }
        // TODO: handle db call for this action
    }, [liked])


    return (
        <Icon type="heart" key="heart" 
            style={(liked) ? {fontSize: '22px'} : {fontSize: '22px'}}
            theme={(liked) ? 'twoTone' : 'outlined'} 
            onClick={() => setLiked(!liked)} />
    )
}

function CommentIcon() {
    return (
        <Icon type="message" key="message" 
        style={{fontSize: '22px'}}/>
    )
}

function ContextMenuIcon(props : any) {
    const menu =(
        <Menu>
            <Menu.Item>
                <a href={`/lessons/view/${props.id}`}>View</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/#">Comment</a>
            </Menu.Item>
            <Menu.Item>
                <a href={`/lessons/build/${props.id}`}>Edit</a>
            </Menu.Item>
        </Menu>
    )
    return (
        <Dropdown overlay={menu} placement='topRight'>
            <Icon type="menu" />
        </Dropdown>
    )
}

export {
    LikeIcon,
    CommentIcon,
    ContextMenuIcon
}