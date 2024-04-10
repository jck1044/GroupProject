import React, { useEffect } from "react";
import { connectToMongo } from "./Mongo";

const EndGame = ({ numCorrect, numAsked }) => {
  useEffect(() => {
    async function connectAndCloseMongo() {
      try {
        await connectToMongo();
      } catch (error) {
        // Handle connection error
        console.error("Failed to connect to MongoDB:", error);
      }
    }

    // Call the function to connect to MongoDB when the component mounts
    connectAndCloseMongo();
  }, []);

  return (
    <div className="end-game">
      <h2>Game Over</h2>
      <p>
        You scored {numCorrect} out of {numAsked}.
      </p>
    </div>
  );
};

export default EndGame;
