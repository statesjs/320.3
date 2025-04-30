export default function Score({ score }) {
  return (
    <div>
      <p>
        Date: {score.date} | Score: {score.score}
      </p>
    </div>
  );
}
