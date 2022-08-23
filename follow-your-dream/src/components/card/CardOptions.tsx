import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';

type CardOptionsProps = {
    id: number,
    name: string,
    hours: number,
    info: string,
    img: string
}

export default function CardOptions({ id, name, hours, info, img }: CardOptionsProps) {
    return (
        <Card className="text-center mx-auto card-container">
            <Card.Img variant="top" src={img} className="card-img"/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="justify-content-space-between 
                align-items-center mb-4 text-center">{name}</Card.Title>
                <Card.Text>{info}</Card.Text>
                <Button variant="primary">Start</Button>
            </Card.Body>
        </Card>
    )
}