import React, {useRef, useEffect} from 'react';

// name password 를 작성하는 form
// useRef 를 이용해서 password 를 제일 먼저 입력하도록 focus 설정
// 만약 export default 를 컴포넌트에 한 번에 작성하길 원한다면
/*
const 로 컴포넌트 시작하는 경우
export const 컴포넌트명 = () => {
    }

function 으로 컴포넌트가 시작하는 경우
export default function 컴포넌트명 {
}

*/


export const RefEx = () => {
    const pwRef = useRef(null);

    useEffect(() => {
        if(pwRef.current){
            pwRef.current.focus();
        }
    }, []);

    
    return (
        <>
            <h2>회원가입</h2>
            <form method='post'>
                <label>이름</label>
                <input type='text' placeholder='이름을 입력하세요.'></input>
            
                <label>비밀번호</label>
                <input type='password' ref={pwRef} placeholder='비밀번호를 입력하세요.' />
            </form>
        </>
    )
}


export default RefEx;