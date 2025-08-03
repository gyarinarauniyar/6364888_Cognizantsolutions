import React from "react";

const ListOfPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 60 },
    { name: "KL Rahul", score: 75 },
    { name: "Rishabh Pant", score: 55 },
    { name: "Hardik Pandya", score: 90 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "Jasprit Bumrah", score: 72 },
    { name: "Mohammed Shami", score: 40 },
    { name: "Shikhar Dhawan", score: 78 },
    { name: "Kuldeep Yadav", score: 50 },
    { name: "Yuzvendra Chahal", score: 65 },
  ];

  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorePlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
