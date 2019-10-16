import { Card, Col, Row } from 'antd'
import React from 'react'
export default function Contribute() {
    return (
        <div style={container}>
            <h3 style={{width: 400, color: 'dimgray'}}>Contribute to open learning</h3>
        // TODO: put these on a row
        <Row gutter={24}>
            <Col span={10}>
                <Card title="Stand-alone Lesson" >

                </Card>
            </Col>
            <Col span={10}>
                <Card title="Course" >

                </Card>
            </Col>
        </Row>
        
        </div>
    )
}

const container = {
    marginRight: 'auto', marginLeft: 'auto', alignText: 'center', padding: 20, color: 'dimgray'
}

const dimgray = {
    color: 'dimgray'
}