import React, { ReactElement, useEffect, useState } from 'react';
import Card from './Card';

export default function ListView() : ReactElement {
    
    const [cards, setCards] = useState(undefined)

    //const [favorite, setFavorite] = useState(false)
    
    useEffect(() => {
        // TODO collect data from the url and pass into the back end to receive cards
        const testCards = {
            'name': 'my first course',
            'description': 'This is a test',
            'tags': ['test']
        }
        const isFavorite = false

        //setFavorite(isFavorite)
        //setCards(testCards)
        fetch('course/all')
        fetch('course/5')
    }, [])

    return (
        <div>
            {cards}
            <Card></Card>
        </div>
    )
}