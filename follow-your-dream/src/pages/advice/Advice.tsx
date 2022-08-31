import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Card from '../../data/Card.json'



export default function Advice(): JSX.Element {

    const { id } = useParams();

    let name  = 'not valid';
    // Changes name based on the URL
    Object.keys(Card).forEach(function(_value: string, key: number){
        if (Card[key].idDream === Number(id)) {
            name = Card[key].name;
        }
    });
    
    return (
        <>
            <h1> You choose the dream: { name } </h1>
            <Link to='/dreams'>Back to dreams</Link>
        </>
    )
}