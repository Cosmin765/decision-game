import './../css/App.css';
import GameStats from './GameStats';
import CardsContainer from './CardsContainer';
import Timer from './Timer';

import { useState } from 'react';

export default function App() {
  const statsCount = 4;

  const statsMaxLevel = 10;

  const [state, setState] = useState({
    statsLevel: Array(statsCount).fill(statsMaxLevel / 2),
    statsLastLevel: Array(statsCount).fill(0),
    statsChanged: Array(statsCount).fill(true)
  });

	const setLevel = effect => {
		const newStatusLevel = state.statsLevel.map((level, index) => {
      state.statsChanged[index] = (effect[index] !== 0);
      return level + effect[index];
    });

    setState({
      statsLevel: Array.from(newStatusLevel),
      statsLastLevel: Array.from(state.statsLevel),
      statsChanged: Array.from(state.statsChanged)
    });
	};

  return (
    <div className="app">
      <GameStats statsInfo={state} statsMaxLevel={statsMaxLevel}/>
      <CardsContainer setLevel={setLevel}/>
      <Timer />
    </div>
  );
}