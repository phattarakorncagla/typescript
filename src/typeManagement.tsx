import { Button, Col, Form, Row, Stack } from "react-bootstrap";

export function TypeManagement() {
  return (
    <>
      <h1>TypeManagement</h1>
      <Row>
        <Stack gap={3} direction="horizontal" className="flex-wrap">
          <Col>
            <Form.Group controlId="type-name">
              <Form.Label>Type name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="display-name">
              <Form.Label>Display name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dropdown">
              <Form.Label>Node type</Form.Label>
              <Form.Select>
                <option value="option1">Data</option>
                <option value="option2">Dataset</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Create type
            </Button>
          </Col>
        </Stack>
      </Row>
    </>
  );
}