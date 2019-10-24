import { Card, Col, Row, Typography, Button } from 'antd'
import React from 'react'
export default function Contribute() {
    const { Title, Paragraph, Text } = Typography;
    return (
        <div >
            <div style={{backgroundColor: 'grey', margin: '0px', left: 0}}>
                <div style={{width: '100%', overflow:'hidden', margin:0, marginLeft: 'auto', marginRight: 'auto'}}><img src={"/static/thought.jpg"} style={img} ></img></div>
            </div>
            <div style={container}>
                <Typography>
                    <Title style={{textAlign: 'center'}}>Contribute to open learning</Title>
                    <Paragraph>
                    //TODO: add real content here. 
                    In the process of internal desktop applications development, many different design specs and
                    implementations would be involved, which might cause designers and developers difficulties and
                    duplication and reduce the efficiency of development.
                    </Paragraph>
                </Typography>
                <Row gutter={24}>
                    <Col span={12}>
                        <Card title="Stand-alone Lesson" >
                            <Button type="primary" size={'large'}>Get Started</Button>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Course" >
                            <Button type="primary" size={'large'}>Get Started</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
            
        
        </div>
    )
}

const container = {
    marginRight: 'auto', marginLeft: 'auto', alignText: 'center', padding: 20, color: 'dimgray'
}

const img : any= {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    margin:'-17.875% 0'
}
const dimgray = {
    color: 'dimgray'
}