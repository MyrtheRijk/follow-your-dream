import { Col, Row } from 'react-bootstrap';
import cardOptions from './Card.json';
import CardOptions from './CardOptions';

export default function CardDream(): JSX.Element {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {cardOptions.map(item => (
          <Col key={item.id}>
            <CardOptions {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

