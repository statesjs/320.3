import { useState } from "react";
import "./App.css";
import Learner from "./components/Learner";
import learnerDatas from "./data/learnerData";

export default function App() {
  const [learners, setLearners] = useState(learnerDatas);

  return (
    <>
      <h1>List of Learners:</h1>
      {learners.map((learner, index) => (
        <Learner key={learner.name} learner={learner} />
      ))}
    </>
  );
}
