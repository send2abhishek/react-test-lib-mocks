import React from "react";
import Col from "react-bootstrap/Col";

const ScoopOptions = ({ name, path }) => {
  return (
    <Col xs={12} md={6} style={{ textAlign: "center" }}>
      <img
        style={{ width: "25%" }}
        src={`http://localhost:3030/${path}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ScoopOptions;
