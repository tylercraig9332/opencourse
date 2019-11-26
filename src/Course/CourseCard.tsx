import React from 'react';
import { Card } from 'antd'

const { Meta } = Card

type CardProps = {title: string, description: string, id: number, url?: string}

export default function CourseCard(props: CardProps) {
  return (
    <Card 
      hoverable 
      style={cardStyle}
      cover={<img alt={props.title} style={{maxWidth: '100%', height: '300px'}} src={'https://images.freeimages.com/images/large-previews/e1b/textures-3-1195806.jpg'}/>}
      onClick={() => window.location.href=`/courses/build/${props.id}`}>
        <Meta title={props.title} description={props.description} />
    </Card>
  )
}


const cardStyle = {
  width: 250,
  maxHeight: 500,
  //border: '1px solid blue',
  margin: 20
} as React.CSSProperties