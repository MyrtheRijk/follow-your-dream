import { Link, useParams } from 'react-router-dom'
import cards from '../../data/Card.json'

export default function Advice(): JSX.Element {
    const { id } = useParams();

    return (
        <>
            <h2>dreams</h2>
            <div>
                {cards.map((card) => {
                    return (
                        <article key={card.idDream}>
                            <h5>{card.name}</h5>
                            <Link to={`/dreams/${card.idDream}`}>more info</Link>
                        </article>
                    )
                })}
            </div>
        </>
    )
}