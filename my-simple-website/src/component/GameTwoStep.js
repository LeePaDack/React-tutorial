import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const GameTwoStep = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random() * 30)+ 1);
    const [attempts, setAttempts] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userGuess = parseInt(guess,10);

        setAttempts(attempts + 1);
        if(userGuess === number){
            setMessage("축하합니다 맞추셨습니다.");
            setIsCorrect(true);
        }
        else if (userGuess > number) {
            setMessage("숫자가 너무 큽니다");
        }
        else {
            setMessage("숫자가 너무 작습니다");
        }
    }
    const handleRestart = () => {     const newNumber = Math.floor(Math.random()* 30) +1;
        // 모든 값 초기화
        setNumber(newNumber); // 맞춰야할 숫자 새로 집어넣기
        setAttempts(0); // 맞추기 위해 시도한 횟수 0 으로 초기화
        setMessage(''); // 틀렸습니다 맞췄습니다 표시 없애주기
        setGuess(''); // input 안에 작성한 숫자도 모두 지워주기
        setIsCorrect(false); // 사용자가 정답 확인 전 상태로 되돌리기

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
            {isCorrect ? (<Link to="/game"><button>처음으로 돌아가기</button></Link>) : (<button onClick={{handleRestart}}>재시작하기</button>)}
            
        </div>
    )
}

export default GameTwoStep;