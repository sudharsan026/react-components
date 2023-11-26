import React from "react";
import { useDrag } from "react-dnd";
const Message = ({ text, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        backgroundColor: "lightblue",
        margin: "12px",
        padding: "12px",
        border: isDragging ? "5px solid green" : "1px solid black",
      }}
    >
      {text}
    </div>
  );
};

export default Message;
