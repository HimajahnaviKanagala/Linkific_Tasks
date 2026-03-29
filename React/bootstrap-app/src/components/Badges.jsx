import { Badge, Container } from "react-bootstrap";

function Badges() {
  return (
    <Container className="py-4">
      <h4>
        Notifications <Badge bg="primary">4</Badge>
      </h4>
      <h5>
        Messages <Badge bg="success">New</Badge>
      </h5>
    </Container>
  );
}
export default Badges;
