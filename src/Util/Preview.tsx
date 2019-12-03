import React, { useState, useEffect } from 'react'

import PreviewImages from './Previews'

import { Card } from 'antd'

const { Meta } = Card

export default function Preview(props : any) {

    const [active, setActive] = useState<number>(-1)

    useEffect(() => {
        // find active index of url path
        let a = -1
        for (let i = 0; i < PreviewImages.length; i++) {
            if (props.preview != null && PreviewImages[i].imageUrl === props.preview) {
                a = i
            }
        }
        setActive(a)
    }, [])

    useEffect(() => {
        let uri = props.preview
        if (active !== -1) {
            const obj = PreviewImages[active]
            uri = obj.imageUrl
        }
        props.savePreview(uri)
    }, [active])


    const prevs = PreviewImages.map((item, i) => {
        return (
            <div key={item.title} style={active === i ? activeStyle : cardStyle} onClick={() => setActive(i)}>
                <Card hoverable style={cStyle} cover={<img style={imageStyle} src={item.imageUrl}/>}>
                    <Meta title={item.title}/>
                </Card>
            </div>
        )
    })

    return (
        <React.Fragment>
            <h3 className="dg">Preview Image</h3>
            <hr style={{width: '16%', marginLeft: 0}}></hr>
            <br></br>
            <p className="dg">Select a preview image</p>
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