import { useState } from "react";
import "./App.css";
import Learner from "./components/Learner";
import learnerDatas from "./data/learnerData";

export default function App() {
  const [learnerData, setLearnerData] = useState({
    learners: learnerDatas,
  });
  return (
    <>
      <h1>List of Learners:</h1>
      {learnerData.learners.map((learner, index) => (
        <Learner key={learner.name} learner={learner} />
      ))}
    </>
  );
}
