import './../css/CardsContainer.css';
import Card from './Card';
import uniqid from 'uniqid';

export default function CardsContainer(props) {
  const cardsCount = props.gameEvents.length;
  
  const getVisibleCard = () => cards.reduce((prev, curr) => prev.props.offset < curr.props.offset ? curr : prev, cards[0]);
  
  const cards = Array.from(Array(cardsCount).keys()).map(i => 
    <Card 
      offset={i * 3} 
      key={uniqid()}
      id={uniqid()}
      gameEvent={props.gameEvents[props.gameEvents.length - 1 - i]}
      getVisibleCard={getVisibleCard}
      removeCard={props.removeCard}
      sendLevel={props.sendLevel}
    />
  );
  
  return (
    <div className="cards-container">
      <div className="cards-holder">
        { cards }
      </div>
    </div>
  );
}