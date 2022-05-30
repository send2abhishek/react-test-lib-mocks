import React from "react";

import { Form, Col, Row } from "react-bootstrap";

const ScoopOptions = ({ name, path, updateItemCount }) => {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };
  return (
    <Col xs={12} md={6} style={{ textAlign: "center" }}>
      <img
        style={{ width: "25%" }}
        src={`http://localhost:3030/${path}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOptions;
