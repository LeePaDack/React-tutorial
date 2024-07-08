import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import Main from './component/Main';
import { Route, Routes } from 'react-router-dom';
import TodoList from './component/TodoList';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/todoList' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
