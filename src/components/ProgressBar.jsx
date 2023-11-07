function ProgressBar({
  index,
  questionsNum,
  points,
  maxPossiblePoints,
  answer,
}) {
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
