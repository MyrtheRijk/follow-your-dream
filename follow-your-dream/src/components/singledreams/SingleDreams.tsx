import { Link, useParams } from 'react-router-dom'
import cards from '../../data/Card.json'

export default function SingleDream(): JSX.Element {
    const { id } = useParams();
    // const card = cards.find((card) => card.id === id);
    // const { img, name } = card;

    return (
        <>
            {/* {cards.find(item => (
                <h2>{id}</h2>
            ))}          */}

            {/* <img src={img} alt={name} />
            <h2>{cardId}</h2>
            <Link to='/dreams'>Back to Dreams</Link> */}
        </>
    )
}