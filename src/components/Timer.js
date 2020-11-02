import './../css/Timer.css';
import { useState } from 'react';

export default function Timer(props) {
  return (
    <div className="timer">
      {Math.round(props.passed)} zile au trecut
    </div>
  );
}