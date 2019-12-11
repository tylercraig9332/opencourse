import React, { Fragment } from 'react'

import { Alert } from 'antd'

type CAProps = {
    show: boolean
}

export default function CorrectAlert(props : CAProps) {

    if (!props.show) return null
    return (
        <Fragment>
            <Alert message="Correct!" type="success" style={{margin: 10}}/>
            <audio src='/static/zapsplat_correct_warm.mp3' autoPlay/>
        </Fragment>
    )
} 

