import React from 'react';
import { Card } from 'antd'

const { Meta } = Card

type CardProps = {title: string, description: string, url: string}

export default function CourseCard(props: CardProps) {
  return (
    <Card 
      hoverable 
      style={{ width: 300 }}
      cover={<img alt={props.title} src={props.url}/>}>
        <Meta title={props.title} description={props.description} />
    </Card>
  )
  
}