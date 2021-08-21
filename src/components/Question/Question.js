import { Button } from "@material-ui/core";
import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";
import { useHistory } from "react-router";
const Question = ({
  currQues,
  setcurrQues,
  score,
  setScore,
  questions,

  options,

  correct,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleSelect = (item) => {
    if (selected === item && selected === correct) {
      return "select";
    } else if (selected === item && selected !== correct) {
      return "wrong";
    } else if (item === correct) return "select";
  };

  const handleCheck = (item) => {
    setSelected(item);
    if (item === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {};

  const handleNext = () => {
    if (currQues > 8) {
      history.push("/result");
    } else if (selected) {
      setcurrQues(currQues + 1);
      setSelected();
    } else {
      setError(true);
    }
  };
  const buttonText = currQues > 8 ? "Submit" : "Next Question";
  return (
    <div className="question">
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>
        Questions: {currQues + 1}
      </h1>
      <div className="singleques">
        <h2 style={{ marginBottom: 20 }}>{questions[currQues].question}</h2>
        <div className="options">
          {error && (
            <ErrorMessage>Please select the option first </ErrorMessage>
          )}
          {options &&
            options.map((item) => (
              <button
                className={`singleOption ${selected && handleSelect(item)}`}
                onClick={() => {
                  handleCheck(item);
                }}
                key={item}
                disabled={selected}
              >
                {item}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/"
            style={{ width: 185, marginRight: 20 }}
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, marginRight: 20 }}
            onClick={handleNext}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
