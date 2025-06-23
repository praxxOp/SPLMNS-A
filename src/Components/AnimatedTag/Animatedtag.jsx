import React from "react";
import { motion } from "framer-motion";
import "./AnimatedTag.css";

const AnimatedTag = ({ text, animation, onClick }) => {
  const { top, left } = animation.position;
  const loopPath = animation.path;
  const duration = animation.duration;

  return (
    <motion.div
      animate={loopPath}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="animated-tag"
      style={{ top, left, position: "absolute" }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      <span className="animated-tag-text">{text}.</span>
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>
    </motion.div>
  );
};

export default AnimatedTag;
