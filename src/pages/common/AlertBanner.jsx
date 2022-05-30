import { Alert } from "bootstrap";
import React from "react";

const AlertBanner = ({ varient, message }) => {
  const alertMessage =
    message || "An expected error ocurred. please try again later";
  const varientType = varient || "danger";
  return <Alert varient={varientType}>{alertMessage}</Alert>;
};

export default AlertBanner;
