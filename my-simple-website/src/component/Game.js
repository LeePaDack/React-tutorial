import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
    // 맞출 숫자를 입력하는 guess 
    const [guess, setGuess] = useState('');
    // 메세지 = 맞췄는지 틀렸는지 전달하는 메세지
    const [message, setMessage] = useState('');
    // 랜덤으로 1 ~ 10 까지 숫자 출력하기 (= 사용자는 숫자를 맞춰야함)
    // Math.random() * 10)+1; 0.0 ~ 1.0 사이의 실수 출력
    // 0 ~ 9 까지 출력이므로 + 1 을 해서 1 ~ 10 으로 변경
    // Math.floor 실수를 정수화
    const [number, setNumber] = useState(Math.floor(Math.random() * 10)+1);
    // 숫자 맞추려고 시도한 횟수 
    const [attempts, setAttempts] = useState(0);

     // 사용자가 정답을 확인하면 다음단계로 이동하는 버튼이 보이게 생성
     const [isCorrect, setIsCorrect] = useState(false); // 정답확인 전이라 false

    // 사용자가 숫자를 맞추려고 시도할 때마다 숫자를 세로 세팅해서 저장해놓기
    const handleChange = (e) => {
        setGuess(e.target.value);
    }
    // <input type='number' value={guess} onChange={(e) => {setGuess(e.target.value)}} placeholder='1 ~ 10 사이의 숫자 입력'/>
    // <input type='number' value={guess} onChange={handleChange} placeholder='1 ~ 10 사이의 숫자 입력'/>

    const handleSubmit = (e) => {
        e.preventDefault(); // 인터넷이 가지고 있는 기본 동작을 방지하는 역할을 함
        // submit 페이지를 데이터를 서버로 전송하거나 페이지가 다시 실행되는 것을 막아줌
        const userGuess = parseInt(guess,10); // 혹시나 문자로 된 숫자가 아닌 문자열일 수 있께 때문에 문자열을 정수로  
        // comst userGuess = parseInt(숫자값,진수천구드링감); 진수친구들 = 10 진수
        // userGuess 사용자가 입력한 값을 숫자로 사용할 수 있음

        setAttempts(attempts + 1); // 맞추려고 제출한 숫자마자 제출시도 1 씩 증가
        if(userGuess === number) {
            setMessage('축하합니다 맞추셨습니다.');
            setIsCorrect(true);
        }
        else if (userGuess > number){
            setMessage('숫자가 너무 큽니다.');
        }
        else {
            setMessage('숫자가 너무 작습니다.');
        }
    }
    const handleRestart = () =>{
        // 게임을 다시 시작하기 버튼을 누르면 랜덤 숫자를 다시 생성하고
        const newNumber = Math.floor(Math.random()* 10) +1;
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
                placeholder='1 ~ 10 사이의 숫자 입력'
            />
            <button type='submit'>추측하기</button>
        </form>
        {/* message 숫자를 맞췄는지 틀렸는지 확인하는 메세지 */}
        <p>{message}</p>
        {/* 자바스크립트에서 제일 많이 쓰는 if 문은 삼항연산자 
         여기에표시한내용 ? true 일 때 실행할 내용 : false 일 때 실행할 내용
         true 나 false 에서 실행할 내용이 많으면 () 로 묶어서 표현
        */}

        {isCorrect ? (<Link to="/game-twoStep"><button>다음 단계로 이동</button></Link>) : (<button onClick={handleRestart}>재시작하기</button>) }

    </div>
)

}

export default Game;