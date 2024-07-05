import React, {useState} from 'react';

const GameTwoStep = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random() * 30)+ 1);
    const [attempts, setAttempts] = useState(0);
    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userGuess = parseInt(guess,10);

        setAttempts(attempts + 1);
        if(userGuess === number){
            setMessage("축하합니다 맞추셨습니다.");
        }
        else if (userGuess > number) {
            setMessage("숫자가 너무 큽니다");
        }
        else {
            setMessage("숫자가 너무 작습니다");
        }
    }
    const handleRestart = (e) => {

    }
    return(
        <div>
            <h1>UP AND DOWN</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type='number'
                value={guess}
                onChange={handleChange}
                placeholder='1 ~ 30 사이의 수를 입력'
                />
                <button>추측하기</button>
            </form>
            <p>{message}</p>
            <button onClick={{handleRestart}}>재시작하기</button>
        </div>
    )
}

export default GameTwoStep;