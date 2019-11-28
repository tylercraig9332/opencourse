import React, { useState, useEffect } from 'react'

import { savePreview } from '../../api/course'
import PreviewImages from '../../Util/Previews'

import { Card } from 'antd'

const { Meta } = Card

export default function Preview(props : any) {

    const [active, setActive] = useState<number>(-1)

    useEffect(() => {
        let uri = props.preview
        if (active !== -1) {
            const obj = PreviewImages[active]
            uri = obj.imageUrl
        }
        savePreview(props.id, uri)
    }, [active])


    const prevs = PreviewImages.map((item, i) => {
        return (
            <div style={active === i ? activeStyle : cardStyle} onClick={() => setActive(i)}>
                <Card hoverable style={cStyle} cover={<img style={imageStyle} src={item.imageUrl}/>}>
                    <Meta title={item.title}/>
                </Card>
            </div>
        )
    })

    return (
        <React.Fragment>
            <h3 className="dg">Preview Image</h3>
            <hr style={{width: '7%', marginLeft: 0}}></hr>
            <br></br>
            <p className="dg">Select a preview image for your course</p>
            <div style={{display: 'flex', alignItems: 'end', flexWrap: 'wrap'}}>
                {prevs}
            </div>
        </React.Fragment>
    )
}

const imageStyle = {
    height: '300px', //auto
    //width: 'auto',
    //maxHeight: 200,
    maxWidth: '100%'
}

const activeStyle = {
    border: '2px solid #1890FF',
    padding: 10,
    width: 250,
    height: 400
}

const cStyle = undefined

const cardStyle = {
    border: '2px solid white',
    padding: 10,
    width: 250,
    height: 400
}