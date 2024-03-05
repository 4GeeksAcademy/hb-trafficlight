import { Button, Col, Row } from "react-bootstrap";

export function Jumbotron({ onClick }) {
  return (
    <Row>
      <Col>
        <h1>Here</h1>
        <p>
          
        </p>
        <Button variant="primary" onClick={onClick}>
          CTA
        </Button>
      </Col>
    </Row>
  );
}
