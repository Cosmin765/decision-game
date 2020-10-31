import './../css/App.css';
import GameStats from './GameStats';
import CardsContainer from './CardsContainer';
import Timer from './Timer';

export default function App() {
  return (
    <div className="app">
      <GameStats />
      <CardsContainer />
      <Timer />
    </div>
  );
}