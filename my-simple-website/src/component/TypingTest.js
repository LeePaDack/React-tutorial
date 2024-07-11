import React, {useState, useEffect} from "react";

import './TypingTest.css';
import Result from './Result';

// 문제는 타자대회 컴포넌트 바깥으로 옮겨 별개로 사용
const 타이핑문제 = ['도토리는 맛있다.', // 1 단계 문제   0 번 문제
    '도토리는 정말 맛있다.', // 2 단계 문제    1 번 문제
    '가나다',
    '기니디',
    '금토일'


];
// 문제를 5 개 만들고 5 개 문제가 무사히 돌아가는지 확인


// 클라이언트가 입력한 값이 일치하는지 확인후 Result.js 에 적힌 결과를 보여주는 게임
const 타자대회 = () => {
    const [텍스트입력, set텍스트입력] = useState(''); // 처음 입력창은 빈 공간
    const [결과확인, set결과확인] = useState(false); // 처음엔 맞춘게 없으니 false
    // 현재 문제와 다음 문제로 넘어가는 set다음문제 작성
    const [현재문제번호, 다음문제번호] = useState(0); // 처음 시작하는 문제 번호는 0 번



    const 현재텍스트 = 타이핑문제[현재문제번호]; // 타이핑문제에는 각각 순서숫자가 들어있는데 0 부터 시작
    // 타이핑문제 -> 현재텍스트 변경해서 각각의 타이핑문제를 비교할 예정
/*
    const [timer, setTimer] = useState(5);
    useEffect(() => {
        let countdown;
        if(timer > 0){
            countdown = setTimeout(() => {
                setTimer(timer -1);
            },  500);
        } else if (timer === 0){
            alert("시간 초과! 게임이 종료되었습니다.");
        }
    })
*/
    const 값변경하기 = (e) => {
        set텍스트입력(e.target.value);

        if(e.target.value === 현재텍스트){
            set결과확인(true);
        }
    }

    const 다음문제로이동 = () => {
        set텍스트입력(''); // 다음 문제로 이동할 때 기존에 작성한 정답 지워주기
        set결과확인(false); 
        // 만약 2 문제 중 1 문제라면 다음 문제로 넘어가기
        if (현재문제번호 < 현재텍스트.length -1) { // index 가 0 부터 시작하기 때문에 length 에 -1 을 해줘야함
            다음문제번호(현재문제번호 + 1);
        } 
        else { // 만약 총 2 문제 중에서 총 2 문제를 모두 맞추면 아래 코드 동작하기
            alert('모두 맞췄습니다!!');
            다시시작();
        }
    }

    const 다시시작 = () => {
        set텍스트입력('');
        set결과확인(false);
        // setTimer(5);
    }

    return(
        <div className="typing-test">
            <h1>타자 치기 대회</h1>
            {/* <div>남은 시간 : {timer} 초</div> */}
            <p>오늘의 문제 : {현재텍스트}</p>
            <div className="typing-container">
                {/* value = 초기에 빈공간 
                    onChange = 작성한 값 변경 
                    disabled = 정답일 때 입력한 값 수정을 못하게 막음 */}
                    <img src="/hancom.jpg" className="character-image"/>
                <textarea 
                    value={텍스트입력}
                    onChange={값변경하기}
                    disabled={결과확인}
                />
                {/* 변경되지 않는 사진을 넣을 때는 public 에 넣어줌
                    사진의 특정값을 주기적으로 변경할 때는 src 에 넣어줌

                    현재는 한 사진을 고정할 것이기 때문에 public 에 넣어줌
                */}
                
            </div>
            {/* Result.js 파일에 inputText = 텍스트 입력과 correctText = 타이핑 문제를 전달 */}
            {결과확인 && <Result inputText={텍스트입력} correctText = {현재텍스트} />}
            {결과확인 && <button onClick={다시시작}>다시 시작하는버튼</button>}
            {결과확인 && <button onClick={다음문제로이동}>다음 문제</button>}
            
        </div>
    )
}


export default 타자대회;