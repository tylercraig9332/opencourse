import React, { ReactElement } from 'react'
import { Spin, Icon } from 'antd'

export default function LoadSpin(props : {message : string} | null) : ReactElement {
    return (
        <div style={loadingStyle}>
            <Spin indicator={<Icon type="loading" style={{fontSize: 48}} spin/>} />
            <p>{props === null ? undefined : props.message}</p>
        </div>
    )
}


const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50rem',
} as React.CSSProperties