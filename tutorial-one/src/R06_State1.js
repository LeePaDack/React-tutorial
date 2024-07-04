import React, {useState} from "react";
/* 
React 는 초반에 function 이라는 함수로 묶어서 사용을 했지만
기능에 있어 부족한 부분 발생
부족한 부분을 class 화로 사용하여 코드를 작성
그런데 class 로 작성하다보니 render 와 같이 불필요한 코드들을 많이 작성하게 되었고,
다시 function 으로 돌아옴

function 으로 돌아왔는데 초기에 function 에서 부족한 부분을 채우기 위해
Hook 이라는 기능을 만듦

Hook 종류   =   react 에서 어떤 동작이나 상태를 표현하거나 변경할 때 사용하는 기능들
1. useState 
2. useEffect 
3. useContext 
4. useReducer 
5. useMemo 
6. useCallback 
7. useRef. useRef
8. useCustom Hook -> 개발자가 만드는 Hook 종류

use 로 시작하는 Hook 을 사용할 때는
import React, { 안에 넣기 } from 'react';   -- 하나의 훅만 작성할 때
import React, { 기능, 기능, ... } from 'react';   -- 두 개 이상의 훅을 작성할 때

State : 컴포넌트(객체)의 상태

useState() 함수
    - 컴포넌트(객체)의 상태(State) 값이 변하게 될 경우 
      해당하는 객체를 다시 새로고침하여 실행하는 함수
    - 다시 새로고침하다 = 다시 렌더링하다 = ReRendering = 다시 표현하다
    - Rendering = 표현
*/
 /* 
React 에서 가장 처음에 나온 방식
    fuction 예제1 () {

ES6(ECMScript 6 = JavaScript6 문법   현재 가장 최신 버전)
    const State예제1 = () => { 

React 에서 사용하는 전통적인 방식
    class 예제1 extends Component{

모두 표현 방식은 다르지만 의미는 같음 
 */
const State예제1 = () => {
    // test = 가장 처음에 가지고 있는 변수값, 처음에 값이 없으면 값이 없는 상태로 있는 것
    // setTest = test 값을 변경하기 위한 값
    // useState('A') = test 가 처음에 가지고 있을 값
    // const [초기값, 변경될값] = useState('처음에 들어갈 값이 무엇인지 작성');
    const [test, setTest] = useState('A');

    // 버튼을 클릭할 경우 동작할 함수(이벤트 핸들러) 기능 작성
    const 값변경하기 = () => {
        if(test === 'A') setTest('B')
            else setTest('A');
        // 중괄호가 없어도 됨

    }

    return(
        // return 안에는 !Doctype 부터 html 과 head body 와 같은 태그를 사용 X
        // 주로 <> </> 나 <div></div> 태그로 전체를 감싸줌
        // 그렇다면 왜 !Doctype 부터 html 과 head body 와 같은 태그는 사용하지 않을까
        // - public -> index.html 코드 안에 <div id="root"> 라는 공간 안에
        // 우리가 만드는 JS 코드와 HTML, CSS 와 같은 코드들이 모두 들어갈 것이기 때문
        <>
            <h1>{test}</h1>

            <button onClick={값변경하기}>변경클릭버튼</button>
            {/* button 을 클릭해서 값이 변경하는 것을 확인할 예정
                그런데 ReactJs 는 onclick 을 쓸 때 onClick 으로 표현
                html, javascript = onclick
                ReactJavascript = onClick 
            */}
        </>
    )
}

export default State예제1;