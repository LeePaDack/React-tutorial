import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MemberList from "./MemberList";
import UserList from "./UserList";
import TodoList from "./TodoList";
// BrowserRouter 가 길기 때문에 Router 라는 이름으로 줄이겠다.
// as Router -> as : alias 약자

console.log("hihi") // 1. hihi 가 먼저 시작되고 진행됨
// function 은 위치를 타지 않음
// const 는 () {} 밑에 작성해야함
function App () {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<UserList/>}/>
                    <Route path="/MemberList" element={<MemberList/>}/>
                    <Route path="/todo" element={<TodoList/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;

/*
function App() {}
- index 다음에 특정 js 가 최상위에서 시작할 때 function
- function 이 제일 먼저 기능이 되진 않음
- function 위에 다른 코드가 와도 문제없음

const App () => {}
- 자신이 js 코드 작성한 페이지에서 최상위
- 이외에는 모두 const 사용
- const 이전에 console.log("hihi");  나 다른 코드 작성을 지양
const 로 가장 중점이 되는 코드를 선언해준 다음에
console.log("hihi");
다른 기능을 작성


*/