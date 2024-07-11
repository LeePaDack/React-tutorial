import React, { useEffect, useState } from "react";
import './TipTacToe.css';

const 배열랜덤으로섞기 = (배열) => {
    return 배열.sort(()=> Math.random()-0.5);
}
/* TicTapToeTwoStep 컴포넌트 시작 위치 */
const TicTapToeTwoStep = () => {
    const [numbers, setNumbers] = useState(배열랜덤으로섞기([...Array(20).keys()].map(n => n + 1)));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(10); // 처음 초기 시간 설정
    

    // useEffect( function 기능명  () => {어떤 기능이 동작해야하나요?  }, [어떤값이변경될때마다 function기능이 움직여야하나요?]); 
    // useEffect(                  () => {                           },  [                                                ]);
    // useEffect(                  () => {},   [numbers]);  // numbers 숫자가 변경될 때마다 function 기능 발생 
    useEffect( () => {
      //  setTimer(3);
        console.log("useEffect Hook 은 효과가 소비자의 눈으로 보이지 않기 때문에 F12 개발자 모드 console 창에서 확인해야 함");
        console.log("TicTapToeTwostep.js 가 실행되면 사용자 눈에 보지이 않게 자동 시작기능을 설정할 수 있음");
        console.log("F12 를 눌러 -> useEffect 시작   글자들이 모두 보이는지 확인");
    }, []);


    useEffect(() => {
        let countdown;
        if(timer > 0) { // 남은 시간이 0 보다 크다면 숫자를 점점 줄이겠다
            // 점점 시간이 줄어드는 효과를 만들어서 적용
            countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        } else if (timer === 0) { // 남은 시간이 없다면
            alert("시간 초과! 게임이 종료되었습니다.");
        }

    })

    const 숫자클릭하기 = (number) => {
        if(number === nextNumber){    
            if(number === 20){
                setMessage('축하합니다. 모든 숫자를 순서대로 클릭했습니다.');
            }
            else {
                setNextNumber(nextNumber + 1);
            }
        } else {
            setMessage('틀렸습니다. 다시 시도하세요.');
        }
    }

    const 재시작버튼 = () => {
        setMessage('');
        setNextNumber(1);
        setNumbers(배열랜덤으로섞기([...Array(20).keys()].map(n => n + 1)));
        setTimer(10); // 재시작 버튼에도 timer 를 5 초로 재설정
    }

    return(
        <div className="tictaptoe-container">
        <h1>틱 탭 토 2</h1>
        <div className="timer">남은 시간 : {timer} 초</div>
        <div className="tictaptoe-grid2">
            {numbers.map((number) => (
                <button className="tictaptoe-button" key={number} onClick={() => 숫자클릭하기(number)}>
                    {number}
                </button>
            ))}
        </div>
        <p>{message}</p>
        <button className="restart-button" onClick={재시작버튼}>재시작하기</button>
        </div>
    )
    
}

/*  검색에 사용  
useEffect(() => {
    소비자가 검색하고 싶은 검색어가 들어올 때 마다 일치하는 내용들 검색하기
    검색이 실시간으로 됨
    '검색한내용' 으로 시작하는 단어를 보여주자
}, [검색한내용]);
*/
export default TicTapToeTwoStep;