import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Cards() {
  return (
    <Container className="py-5">
      <Row>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Col md={4} key={item}>
            <Card className="mb-4 shadow text-center">
              <Card.Body>
                <Card.Title>Card {item}</Card.Title>
                <Card.Text>Sample Bootstrap card</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Cards;
