import React, { useState, useEffect } from 'react'

import { Icon, message } from 'antd'


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

export {
    LikeIcon,
    CommentIcon
}