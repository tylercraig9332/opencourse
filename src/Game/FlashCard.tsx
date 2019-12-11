import React, { useState, CSSProperties, useEffect } from 'react'
import { Card } from 'antd'

type FlashCardProps = {
    front : string,
    back : string,
    sound? : boolean // Only works on back flip due to a bug where the front noise gets ran on page load. I've tried fixing it but have given up.
}

export default function FlashCard(props : FlashCardProps) {

    const [flipped, flip] = useState<boolean>(false)
    const [animated, animate] = useState<boolean>(false)
    
    useEffect(() => {
        window.setTimeout(() => {
            let f = flipped
            if (animated) f = !flipped
            flip(f)
            animate(false)
        }, 200)
    }, [animated])
    
    if (!flipped) return (
        <div>
            <Card onClick={() => animate(true)} style={(!animated) ? cardStyle : flipStyle} hoverable>
                <h1>{props.front}</h1>
            </Card>
        </div> 
    )
    return (
        <div>
            <Card onClick={() => animate(true)} style={(!animated) ? cardStyle : flipStyle} hoverable>
                <h1>{props.back}</h1>
            </Card>
            <audio key="back" src='/static/card_flip.mp3' autoPlay/>
        </div> 
    )
}

const cardStyle = {
    width: 500,
    minWidth: 500,
    minHeight: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
} as CSSProperties

const flipStyle = {
    transform: 'rotateY(180deg)',
    transition: 'all 0.5 ease',
    backfaceVisibility: 'hidden',
    // Same as regular card style
    width: 500,
    minWidth: 500,
    minHeight: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
} as CSSProperties