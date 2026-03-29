import { Alert, Container } from "react-bootstrap";

function Alerts() {
  return (
    <Container className="py-4">
      <Alert variant="success">This is a success alert!</Alert>
      <Alert variant="danger">This is an error alert!</Alert>
    </Container>
  );
}
export default Alerts;
