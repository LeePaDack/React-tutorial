import './App.css';
import Game from "./component/Game";
import GameTwoStep from './component/GameTwoStep';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/Layout/NavBar';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import TodoList from './component/TodoList';
import TicTapToe from './component/TicTapToe/TicTapToePre';
import TicTapToeTwoStep from './component/TicTapToe/TicTapToeTwoStep';
import TypingTest from './component/TypingTest';
import MovieRating from './component/Movie/MovieGrade';
/* Layout

Module not found: Error: Can't resolve './component/Header' ===> 에러가 발생한 파일 위치 App.js 에서 해다 파일 위치 찾을 수 없음이라는 에러 발생
in 'C:\Users\user1\react-workspace\my-simple-website\src'

ERROR in ./src/App.js 10:0-40  에러가 발생한 파일 위치
*/

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes> {/* 링크 모음     예전에는 Switch 라고 작성했지만 v6 부터 Routes 이름 사용*/}
        <Route path='/' element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path='/game-twoStep' element={<GameTwoStep/>}/>
        <Route path='/toDoList' element={<TodoList/>}/>
        <Route path='/TicTapToe' element={<TicTapToe/>}/>
        <Route path='/ttt-twoStep' element={<TicTapToeTwoStep/>}/>
        <Route path='/typingTest' element={<TypingTest/>}/>
        <Route path='/movieRate' element={<MovieRating/>}/>
      </Routes>

      <Footer/>
    </div>  
  );
}

export default App;
