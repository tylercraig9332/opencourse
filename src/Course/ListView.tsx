import React, { ReactElement, useEffect, useState } from 'react';
import { CourseListProps } from '../@types/Props'

import { notification } from 'antd'

import LoadSpin from '../Util/LoadSpin'

export default function ListView(props : CourseListProps) : ReactElement {
    
    const [cards, setCards] = useState<Object[] | null>(null)
    const [loaded, setLoaded] = useState<boolean>(false)

    //const [favorite, setFavorite] = useState(false)
    useEffect(() => {
        // TODO collect data from the url and pass into the back end to receive cards
        const isFavorite = false

        //setFavorite(isFavorite)
        //setCards(testCards)
        fetch(props.fetchString).then((prom) => prom.json())
        .then((data : Object[]) => {
            setCards(data)
            setLoaded(true)
        })
        .catch(() => {
            console.log("error")
            setLoaded(true)
        })
    }, [])


if (cards == undefined && !loaded) return <LoadSpin message="Loading courses..."/>
if (cards == undefined && loaded) notification.error({message: 'An Error has occured with loading courses', description: 'This may be due to none existing'})
    return (
        <div style={cardsContainer}>
            <p>No cards here</p>
        </div>
    )
}

const cardsContainer = {
    display: 'flex',
    padding: 10
}