import { useQuiz } from "../context/quizContext";

function NextButton() {
  const { answer, index, questionsNum, dispatch } = useQuiz();
  if (answer === null) return null;

  if (index < questionsNum - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === questionsNum - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
