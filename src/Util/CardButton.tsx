import React, { useState } from 'react'

import {Card, Icon} from 'antd'

// TODO: fix props to not be any
export default function CardButton(props : any) {

    const [hover, setHover] = useState<boolean>(false)

    return (
        <Card style={(hover) ? cardHover : cardStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={props.onClick} hoverable>
            {props.children}
            <br></br>
            {hover ? <Icon type={props.icon} /> : null}
        </Card>
    )
}

const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 200,
    margin: 25,
    fontSize: '32px',
    textAlign: 'center',
} as React.CSSProperties

const cardHover = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 200,
    margin: 25,
    fontSize: '32px',
    borderColor: '#1890FF',
    textAlign: 'center',
} as React.CSSProperties