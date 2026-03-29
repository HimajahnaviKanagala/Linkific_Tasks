import { Button, Container } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-light py-5 text-center">
      <Container>
        <h1 className="display-4">Welcome to Bootstrap</h1>
        <p className="lead">Build fast with prebuilt components</p>
        <Button variant="primary">Get Started</Button>
      </Container>
    </div>
  );
}
export default Hero;
