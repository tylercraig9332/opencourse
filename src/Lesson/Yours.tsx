import React from 'react'
import ListView from './ListView'

export default function Yours() {
    return (
        <ListView fetchString='yours' title="Lessons Made by You"/>
    )
}