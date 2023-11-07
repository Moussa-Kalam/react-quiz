/* eslint-disable react/prop-types */
import classNames from "classnames";

export const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={classNames("btn btn-option", {
            answer: index === answer,

            correct: hasAnswered && index === question.correctOption,

            wrong: hasAnswered && index !== question.correctOption,
          })}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
