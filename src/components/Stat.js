import './../css/Stat.css';
import Swal from 'sweetalert2';
import { useState } from 'react';

const map = (x, a, b, c, d) => (x - a) / (b - a) * (d - c) + c;

export default function Stat(props) {
  const [level, setLevel] = useState(props.info.lastLevel);

  const handleClick = () => {
    Swal.fire(
      props.title,
      props.description,
      'question'
    );
  }; // display the alert

  if(level === props.info.lastLevel) {
    setTimeout(() => setLevel(props.info.currLevel), 0); // so that stats fill linearly
  };
  
  return (
    <div className="stat" onClick={handleClick}>
      <div 
        className="fill-level"
        style={{
          height: map(level, 0, props.maxLevel, 0, 100) + '%'
        }}
      ></div>
      <img src={props.src} alt=""/>
    </div>
  );
}