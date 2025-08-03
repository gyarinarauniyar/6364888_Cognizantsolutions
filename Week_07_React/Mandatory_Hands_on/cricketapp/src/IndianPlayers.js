import React from "react";

const IndianPlayers = () => {
  const teamPlayers = ["Virat", "Rohit", "Rahul", "Pant", "Hardik", "Jadeja"];

  const oddPlayers = teamPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = teamPlayers.filter((_, index) => index % 2 === 0);

  const T20Players = ["Bumrah", "Chahal", "Surya"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Ishant"];

  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Merged Players</h2>
      <ul>{allPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
