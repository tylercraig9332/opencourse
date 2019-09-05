import React, { ReactElement, useEffect, useState } from 'react';
import CardConnor from './CardConnor';

export default function ListView() : ReactElement {
    
    const [cards, setCards] = useState<Object[] | null>(null)

    //const [favorite, setFavorite] = useState(false)
    useEffect(() => {
        // TODO collect data from the url and pass into the back end to receive cards
        const isFavorite = false

        //setFavorite(isFavorite)
        //setCards(testCards)
        fetch('course/all').then((prom) => prom.json())
        .then((data : Object[]) => {
            setCards(data)
        })
        .catch(() => {
            console.log("error")
        })
    }, [])

    let cardRender: JSX.Element[] = new Array()
    cardRender.push((<div key={-1}>No cards</div>))
    if (cards != null) {
        cardRender.pop()
        cardRender = cards.map((card : any) => {
            return <CardConnor name={card.name} description={card.description} />
        })
    }
    
    

    return (
        <div>
            {cardRender}
        </div>
    )
}