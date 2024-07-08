import logo from './logo.svg';
import './App.css';
import Game from "./component/Game";
import GameTwoStep from './component/GameTwoStep';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Header from './component/Header';
import TodoList from './component/TodoList';

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
      </Routes>
    </div>  
  );
}

export default App;
