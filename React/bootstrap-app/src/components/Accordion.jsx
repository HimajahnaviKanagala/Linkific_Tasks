import { Accordion, Container } from "react-bootstrap";

function AccordionDemo() {
  return (
    <Container className="py-4 mb-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Section 1</Accordion.Header>
          <Accordion.Body>This is the first section content.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Section 2</Accordion.Header>
          <Accordion.Body>This is second section content.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
export default AccordionDemo;
