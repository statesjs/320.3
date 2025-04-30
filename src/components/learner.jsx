import Score from "./Scores";
export default function Learner({ learner }) {
  return (
    <>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h3>Scores:</h3>
      {learner.scores.map((score) => (
        <Score key={learner.name} score={score} />
      ))}
    </>
  );
}
