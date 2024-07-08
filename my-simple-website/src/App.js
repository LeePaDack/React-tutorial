import logo from './logo.svg';
import './App.css';
import Game from "./component/Game";
import GameTwoStep from './component/GameTwoStep';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes> {/* 링크 모음 */}
        <Route path='/' element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path='/game-twoStep' element={<GameTwoStep/>}/>
      </Routes>
    </div>  
  );
}

export default App;
