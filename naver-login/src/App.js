import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserInfo from './UserInfo';
// html 파일이 1 개 밖에 없는 React 에서는 
// Router 를 이용해서 각 경로를 설정
// BrowserRouter = Router 웹에 전체적인 경로
// Switch -> Routes(변경됨) 경로들
// Route 경로

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/userinfo' element={<UserInfo/>}/>
        </Routes>
      </Router>
  );
}

export default App;
