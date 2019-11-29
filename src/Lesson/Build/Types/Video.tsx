import React, { useState, useEffect } from 'react';
import VideoPlayer from '../../VideoPlayer'
import { Button, Modal, Input, message } from 'antd'

export default function Video(props : any) {

    const [videoLink, setVideoLink] = useState<string>('');
    const [videoID, setVideoID] = useState<string>('')
    const [displayView, setDisplay] = useState<boolean>(false)
    const [modalView, setModal] = useState<boolean>(false)

    useEffect(() => {
        let vLink = ''
        let vID = ''
        let d = false
        if (props.lesson.content.length > 0) {
            // Assuming the content is of type video
            let c = JSON.parse(props.lesson.content)
            if (c.videoLink != undefined) {
                vLink = c.videoLink
                vID = c.videoID
                d = true
            }
        }
        setVideoID(vID)
        setVideoLink(vLink)
        setDisplay(d)
    }, [])

    useEffect(() => {
        if (displayView != false) {
            let l = props.lesson
            let d = {
                videoLink: videoLink,
                videoID: videoID
            }
            l.content = JSON.stringify(d)
            props.setLesson(l)
        }
    }, [displayView])

    function parseLink() {
        // TODO: Handle stupid input
        const ids = videoLink.split('v=')
        let d = true
        if (ids[1] == undefined) {
            message.error('Please insert a valid YouTube link')
            d = false
        }
        setVideoID(ids[1])
        setDisplay(d)
    }

    return (
        <React.Fragment>
            <Button onClick={() => setModal(true)} >Insert Video</Button>
            <Modal visible={modalView} onOk={() => {parseLink(); setModal(false)}} onCancel={() => setModal(false)}>
                <br></br>
                <p>Paste YouTube Link</p>
                <Input size="large" placeholder="Paste YouTube Link" onChange={(e) => setVideoLink(e.target.value)}/>
            </Modal>
            <hr></hr>
            <VideoPlayer videoID={videoID} visible={displayView} />
        </React.Fragment>
    )
}