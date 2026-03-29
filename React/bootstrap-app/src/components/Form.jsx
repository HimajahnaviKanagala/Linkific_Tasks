import { Button, Container, Form } from "react-bootstrap";

function Contact() {
  return (
    <Container className="py-5">
      <h2 className="text-center">Contact Form</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}
export default Contact;
