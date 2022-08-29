import { Col, Row } from 'react-bootstrap';
import cardData from '../../data/Card.json';
import CardOptions from './CardOptions';

export default function CardDream(): JSX.Element {
  return (
    <>
      <Row xs={1} md={2}>
        {cardData.map(item => (
          <Col key={item.idDream}>
            <CardOptions {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

