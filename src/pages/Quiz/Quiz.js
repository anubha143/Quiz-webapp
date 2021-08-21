import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";
const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setcurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  console.log(options);
  const handleShuffle = (otheroptions) => {
    return otheroptions.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome {name}</span>

      {questions ? (
        <>
          {/* CATEGORY AND SCORE CODE */}
          <div className="quizInfo">
            <span>{questions[currQues]?.category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currQues={currQues}
            setcurrQues={setcurrQues}
            score={score}
            setScore={setScore}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 200 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
