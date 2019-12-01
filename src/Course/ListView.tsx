import React, { ReactElement, useEffect, useState } from 'react';
import { CourseListProps } from '../@types/Props'

import { notification } from 'antd'

import LoadSpin from '../Util/LoadSpin'
import { listCourses } from '../api/course'
import CourseCard from './CourseCard'

export default function ListView(props : CourseListProps) : ReactElement {
    
    const [cards, setCards] = useState<Object[] | null>(null)
    const [loaded, setLoaded] = useState<boolean>(false)

    //const [favorite, setFavorite] = useState(false)
    useEffect(() => {
        // TODO collect data from the url and pass into the back end to receive cards
        let fetchString = window.location.href.split('/')[4]
        //setFavorite(isFavorite)
        //setCards(testCards)
        // GetCourses
        listCourses(fetchString).then(c => {
            if (c != undefined) {
                setCards(c)
            } 
            else {
                setCards(null)
            }  
        })
    }, [])


    if (cards == undefined && loaded) notification.error({message: 'An Error has occured with loading courses', description: 'This may be due to none existing'})
    if (cards == undefined && !loaded) return <LoadSpin message="Loading courses..."/>

    const cardsMap = (
        cards!.map((course : any) => {
            return <CourseCard key={course.id} title={course.name} description={course.description} id={course.id} preview={course.preview}/>
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