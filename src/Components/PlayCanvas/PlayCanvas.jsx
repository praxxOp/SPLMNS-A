import React from "react";
import AnimatedTag from "../AnimatedTag/Animatedtag.jsx";
import "./PlayCanvas.css";

const AnimationCanvas = ({ animations, onShoot, score }) => {
  return (
    <div className="animation-canvas">
      <div className="score-display">  {score}</div>
      {animations.map((item) => (
        <AnimatedTag
          key={item.id}
          text={item.text}
          animation={item.animation}
          onClick={() => onShoot(item.id)}
        />
      ))}
    </div>
  );
};

export default AnimationCanvas;
