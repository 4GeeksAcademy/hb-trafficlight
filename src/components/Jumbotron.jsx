import { Button, Col, Row } from "react-bootstrap";

export function Jumbotron({ onClick }) {
  return (
    <Row>
      <Col>
        <h1>Here</h1>
        <p>
          
        </p>
        <Button className="handleClickRed" onClick={() => {alert("Click");}}></Button>
       
      </Col>
    </Row>
  );
}
