import { Container, Tab, Tabs } from "react-bootstrap";

function TabsDemo() {
  return (
    <Container className="py-4">
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Home">
          <p className="mt-3">This is Home tab content </p>
        </Tab>
        <Tab eventKey="profile" title="profile">
          <p className="mt-3">This is Profile tab content</p>
        </Tab>
        <Tab eventKey="contact" title="contact">
          <p className="mt-3">This is Contact tab content</p>
        </Tab>
      </Tabs>
    </Container>
  );
}
export default TabsDemo;
