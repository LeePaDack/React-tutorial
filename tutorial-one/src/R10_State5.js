import React, {useState} from "react";

/* 1 번 자식은 ID 를 가진 객체 */
const ID값 = (props) => {
    // handler = 핸들러 = 자동차 운전할 때 핸들을 가지고 자동차를 운전하는 것 처럼
    // 핸들이라는 이름에는 어떤 값을 조종한다 어떤 값을 처리한다 라는 의미
    // 코딩에서 핸들이라는 것은 값을 조종한다는 의미
    const {handler} = props;

    return (
        <div className="wrapper">
            {/* htmlFor = for 속성 */}
            <label htmlFor="inputId">ID</label>
            {/* onChange = 값이 바뀌었을 때 부모로부터 전달받은 함수 핸들러 수행 */}
            <input type="text" id="inputId" onChange={handler}/>
        </div>
    )
}

const 부모예제 = () => {
    // 상태변수 선언 (State, useState)
    const [id, setId] = useState(''); // 맨 처음 빈 값으로 넣어줄 때는 '' 로 사용
    const [pw, setPw] = useState('');
    // 이벤트 : 동작, 행위
    // 이벤트 리스너 : 동작(이벤트) 감지
    // 이벤트 핸들러 : 이벤트가 감지됐을 때 수행할 기능

    // id값 조종 이라는 이벤트 핸들러 기능 설정
    const id값조종 = (e) => {  // event = e = 어떤 동작이나 행동 포착
        setId(e.target.value) // <ID값 handler={id값조종}/> 여기서 값이 변경되는 타겟의 값을 가져오겠다.
    }
    const pw값조종 = (e) => { 
        setPw(e.target.value)
    }
    return(
        // props 를 이용해 이벤트 핸들러용 함수를 자식 객체(컴포넌트)에 전달
        <>
        <ID값 handler={id값조종}/>
        <PW값 handler={pw값조종}/>
        {/* ID, PW 가 입력되지 않으면 버튼 비활성화
        
            <button disabled={id.length === 0 || pw.length === 0}>
             login
            </button>  
        
        disabled = 버튼을 클릭하지 못하게 비활성화
        disabled 는 버튼 이외 input textarea 에서 사용 가능 =
        
        
        */}

        <button disabled={id.length === 0 || pw.length === 0}>
             login
            </button>  
        </>
    )
}

const PW값 = ({handler}) => {
/*
const ID값 = (props) => {3
     const {handler} = props;

const PW값 = ({handler}) => { 

    의미는 값은 다른 작성법
*/

    return(
        <div className="wrapper">
            <label htmlFor="inputPw">PW</label>
            <input type="password" id="inputPw" onChange={handler}/>
        </div>
    )
}

export default 부모예제;