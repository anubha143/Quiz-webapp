import { Button } from "@material-ui/core";
import React from "react";
import "./Result.css";
const Result = ({ score }) => {
  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        Go to Home Page
      </Button>
    </div>
  );
};

export default Result;
