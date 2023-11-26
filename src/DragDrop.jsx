import React, { useState } from "react";
import Message from "./Message";
import { useDrop } from "react-dnd";
const Data = [
  {
    id: 1,
    text: "Hello",
  },
  {
    id: 2,
    text: "World",
  },
  {
    id: 3,
    text: "Drag",
  },
  {
    id: 4,
    text: "Drop",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addMessage(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addMessage = (id) => {
    console.log(id);
    // Convert the id to a number if it's a string (assuming it's numeric)
    const messageId = typeof id === "string" ? parseInt(id, 10) : id;

    // Check if the message with the given id already exists in the board
    const isDuplicate = board.some((message) => message.id === messageId);

    console.log("isDuplicate:", isDuplicate);

    if (!isDuplicate) {
      // If not a duplicate, add the message to the board
      const messageToAdd = Data.find((_message) => _message.id === messageId);

      if (messageToAdd) {
        // Use Set to track unique message ids
        const uniqueIds = new Set(board.map((message) => message.id));

        // Check if the id is unique before updating the board
        if (!uniqueIds.has(messageId)) {
          setBoard((prevBoard) => [...prevBoard, messageToAdd]);
        }
      }
    }
  };

  const handleDelete = (id) => {
    if (board.length === 0) {
      return;
    } else {
      let newBoard = board.filter((_message) => _message.id !== id);
      setBoard(newBoard);
    }
  };
  console.log(board);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="texts">
        {Data.map((_texts) => (
          <div key={_texts.id}>
            <Message text={_texts.text} id={_texts.id} />
          </div>
        ))}
      </div>
      <div
        ref={drop}
        className="board"
        style={{
          minHeight: "400px",
          width: "400px",
          border: "2px solid black",
          alignSelf: "center",
          position: "relative",
        }}
      >
        {board.map((_text) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <Message key={_text.id} text={_text.text} id={_text.id} />
            </div>
            <div
              key={_text.id}
              style={{
                cursor: "pointer",
                backgroundColor: "tomato",
                padding: "4px",
                color: "white",
                fontWeight: "bold",
                marginRight: "12px",
              }}
              onClick={() => handleDelete(_text.id)}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDrop;
