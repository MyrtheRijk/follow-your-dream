import { Col, Row } from 'react-bootstrap';
import cardOptions from './Card.json';
import CardOptions from './CardOptions';

export default function CardDream(): JSX.Element {
  return (
    <>
      <Row xs={1} md={2}>
        {cardOptions.map(item => (
          <Col key={item.id}>
            <CardOptions {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

