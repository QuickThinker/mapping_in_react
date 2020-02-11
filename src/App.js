import React from 'react';
import KI from "./Character/Killer_Instinct";
import './App.css';

function App() {

  const KillerInstinct = [
        {
          name:"Cinder",
          power:"fire",
          color:"orange",
          age: 28,
          moves:["Trailblazer, ", "Inferno, ", "Fire Flash "]
        },
        {
          name:"Aganos",
          power: "rock",
          color: "#009999",
          age: 900000,
          moves:["Payload Assault, ", "Pulverize, ", "Ruin"]
        },
        {
          name:"Jago",
          power: "Tiger Spirit",
          color: "#336699",
          age: 25,
          moves:["Edokuken, ", "Tiger Fury, ", "Wind Kick "]
        },
        {
          name: "TJ Combo",
          power: "Cypernetics",
          color: "#dd1b25",
          age: 45,
          moves: ["Spin Fist, ", "Shoot Toss, ", "Powerline "]
        },
        {
          name: "Hisako",
          power: "Undead",
          color: "#222223",
          age: 464,
          moves: ["Ryo Zan, ", "Possession, ", "Influence "]
        },
        {
          name: "Orchid",
          power: "Spy",
          color: "#4ddd20",
          age: 32,
          moves: ["Flick Flack, ", "Ichi Ni San, ", "Ichi Nise "]
        },

  ];

  const characters = KillerInstinct.map((it,idx)=>
      <KI name={it.name} key={idx} power={it.power} age={it.age} moves={it.moves} color={it.color} />

  )


  return (
    <div className="App" >
        <div>  {characters} </div>
    </div>
  );
}

export default App;
