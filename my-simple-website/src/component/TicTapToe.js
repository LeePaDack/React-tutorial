/*import React, {useEffect } from 'react';
import './TipTacTie.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] = (1);
  const [message, setMessage] = ('');

  const handleNumberClick = (e) => {
    e.preventDefault();

    const userSelect = parseInt(guess,10);
    if (numbers === userSelect) {
      if (userSelect=== 9) { 
        setMessage("축하합니다. 성공하셨습니다.");
    } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
        setMessage("틀렸습니다.");
    }
  };

  const handleRestart = () => {
    const newNumbers = (shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setMessage(''); 
    setNumbers(newNumbers); 
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTap</h1>
      <div className="grid">
        {                          .                                ((                            ) => (
          <button key={                           } onClick={() =>                      (        )} className="number-button">
            {                  }
          </button>
        ))}
      </div>
      <p className="message">{          }</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
*/