import React, {useRef, useEffect} from 'react';

const RefInputFocus = () => {
    const inputRef = useRef(null);
    // useEffect 에서 , [] 값이 비어있으면 .js 를 시작하자마자
    // 특정 기능이나 효과 발생

    // R20_~~.js 들어오자마자 input 창을 바라보기 설정
    useEffect (() => {
            // current = null 이기 때문에 inputRef = 기본값 null
            if(inputRef.current){ 
                inputRef.current.focus(); 
            }
    },[]);
    const 버튼클릭 = () => {
        if(inputRef.current){ // current 는 inputRef 가 설정된 태그값 확인
            inputRef.current.focus(); // focus 는 영어로 초점
            // inputRef 라는 ref 값을 가진 
            // current = input 태그를 바라보고
            // input 이 null 이라면 input 창 안을 중점으로 확인
        }
    };

    return (
        <div>
            <input ref={inputRef} type='text'/>
            <button onClick={버튼클릭}>input 안에 값이 비었으면 input 으로 위치 이동</button>
        </div>
    )
}

export default RefInputFocus;