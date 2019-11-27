import React, { ReactElement, useEffect, useState } from 'react';

import { notification } from 'antd'

import LoadSpin from '../Util/LoadSpin'
import { listCourses, getAuthsData } from '../api/course'
import CourseCard from './CourseCard'

export default function ListView() : ReactElement {
    
    const [cards, setCards] = useState<Object[] | null>(null)
    const [loaded, setLoaded] = useState<boolean>(false)

    //const [favorite, setFavorite] = useState(false)
    useEffect(() => {
        // TODO collect data from the url and pass into the back end to receive cards
        let fetchString = window.location.href.split('/')[4]
        if (fetchString == 'all') {
            listCourses(fetchString).then(c => {
                console.log(c)
                if (c != undefined) {
                    setCards(c)
                } 
                else {
                    setCards(null)
                }  
            })
        } else if (Number(fetchString) != NaN) {
            let tempNum = Number(fetchString)
            getAuthsData(tempNum)
                .then(d => {
                    console.log(d)
                    if (d != undefined) {
                        setCards(d)
                    } 
                    else {
                        setCards(null)
                    } 
                })
        }
        
        //setFavorite(isFavorite)
        //setCards(testCards)
        // GetCourses
        
    }, [])


    if (cards == undefined && loaded) notification.error({message: 'An Error has occured with loading courses', description: 'This may be due to none existing'})
    if (cards == undefined && !loaded) return <LoadSpin message="Loading courses..."/>

    const cardsMap = (
        cards!.map((course : any) => {
            return <CourseCard title={course.name} description={course.description} id={course.id}/>
        }) 
    )

    return (
        <div style={cardsContainer}>
            {cardsMap}
        </div>
    )
}

const cardsContainer = {
    display: 'flex',
    flexWrap: 'wrap'
} as React.CSSProperties