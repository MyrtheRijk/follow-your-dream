import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link, useParams } from 'react-router-dom'
import './Card.css';

type CardOptionsProps = {
    idDream: number,
    name: string,
    hours: string,
    info: string,
    img: string
}

export default function CardOptions({ idDream, name, hours, info, img }: CardOptionsProps) {
    const { id } = useParams();

    return (
        <Card className="mx-auto card-container">
            <Card.Img variant="top" src={img} className="card-img"/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-secondary">{hours}</span>
                </Card.Title>
                <Card.Text>{info}</Card.Text>
                <article key={idDream}>
                    <Link to={`/dreams/${idDream}`}><Button variant="primary" key={id}>Start</Button></Link>
                </article>
            </Card.Body>
        </Card>
    )
}
