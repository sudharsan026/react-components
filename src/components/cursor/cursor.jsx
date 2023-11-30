import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";
const Cursor = () => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallCircle] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mousemove = (e) => {
      console.log(e);
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);
    return () => window.removeEventListener("mousemove", mousemove);
  }, []);
  return (
    <>
      <motion.div
        animate={{
          x: largeCircle.x - 16,
          y: largeCircle.y - 16,
          transition: {
            type: "spring",
            delay: 0.1,
          },
        }}
        className="large-circle"
      ></motion.div>
      <motion.div
        animate={{
          x: smallCircle.x - 4,
          y: smallCircle.y - 4,
          transition: {
            type: "spring",
          },
        }}
        className="small-circle"
      ></motion.div>
    </>
  );
};

export default Cursor;
