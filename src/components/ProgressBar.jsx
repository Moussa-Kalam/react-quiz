import { useQuiz } from "../context/quizContext";

function ProgressBar() {
  const { questionsNum, index, answer, points, maxPossiblePoints } = useQuiz();

  return (
    <header className='progress'>
      <progress max={questionsNum} value={index + Number(answer !== null)} />

      <p>
        Question{" "}
        <strong>
          {index} / {questionsNum}
        </strong>
      </p>

      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default ProgressBar;
