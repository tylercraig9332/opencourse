import React, {useState, useEffect} from 'react'
import { fetchLessons } from '../api/lesson'

import PreviewCard from './PreviewCard'
import LoadSpin from '../Util/LoadSpin'

import {notification} from 'antd'

type LVProps = {
    fetchString : string,
    title: string
}

export default function ListView(props : LVProps) { 

    const [cards, setCards] = useState<Object[] | null>(null)
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        fetchLessons(props.fetchString).then(c => {
            //console.log(c)
            if (c != undefined) {
                setCards(c)
            } 
            else {
                setCards(null)
            } 
            setLoaded(true) 
        })
    }, [])


    if (cards == undefined && loaded) notification.error({message: 'An Error has occured with loading lessons', description: 'This may be due to none existing'})
    if (cards == undefined && !loaded) return <LoadSpin message="Loading lesosns..."/>

    const cardsMap = (
        cards!.map((lesson : any) => {
            return <div style={{display: 'inline-block'}} key={lesson.name}><PreviewCard lesson={lesson}/></div>
        }) 
    )


    return (
        <div>
            <h1 style={heading}>{props.title}</h1>
            <hr></hr>
            <div style={listContainer}>
                <hr></hr>
                {cardsMap}
                <hr></hr>
            </div>
            <hr></hr>
        </div>        
    )
}

const listContainer = {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflowX: 'scroll',
    alignItems: 'start'
} as React.CSSProperties

const heading = {
    color: 'dimgray',
    margin: 20
} as React.CSSProperties