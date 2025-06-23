import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./Components/InputField/Input.jsx";
import AnimationCanvas from "./Components/PlayCanvas/PlayCanvas.jsx";
import "./App.css";
import Cursor from "./Components/Cursor/Cursor.jsx";
const randomPosition = () => ({
  top: Math.random() * 80 + "%",
  left: Math.random() * 80 + "%",
});

const randomLoopPath = () => {
  const directions = [
    { x: [0, 200, 0, -200, 0], y: [0, -100, 100, -100, 0] },
    { x: [0, -150, 150, -150, 0], y: [0, 100, -100, 100, 0] },
    { x: [0, 100, 200, 100, 0], y: [0, 50, 100, 50, 0] },
    { x: [0, -100, -200, -100, 0], y: [0, -50, -100, -50, 0] },
    { x: [0, 150, 0, -150, 0], y: [0, 0, 100, 0, -100] },
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const randomDuration = () => Math.random() * 10 + 5;

export default function App() {
  const [submittedTexts, setSubmittedTexts] = useState([]);
  const [score, setScore] = useState(0);
  const shootSound = new Audio("/shot-sound.wav");
  const handleSubmission = (text) => {
    const newEntry = {
      id: uuidv4(),
      text,
      animation: {
        path: randomLoopPath(),
        position: randomPosition(),
        duration: randomDuration(),
      },
    };
    setSubmittedTexts((prev) => [...prev.slice(-4), newEntry]);
  };

  const handleShoot = (id) => {
    shootSound.currentTime = 0;
    shootSound.play();
    setSubmittedTexts((prev) => prev.filter((item) => item.id !== id));
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="app-container">
      <Cursor />
      <InputForm onSubmit={handleSubmission} />
      <AnimationCanvas
        animations={submittedTexts}
        onShoot={handleShoot}
        score={score}
      />
      <p>A maximum of five targets can be active on the screen at once.</p>
    </div>
  );
}
