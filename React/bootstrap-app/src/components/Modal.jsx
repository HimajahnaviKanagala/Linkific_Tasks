import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

function MyModal() {
  const [show, setShow] = useState(false);

  return (
    <Container className="py-4">
      <Button onClick={() => setShow(true)}>Open Modal</Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>My Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is dynamic content!</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
export default MyModal;
