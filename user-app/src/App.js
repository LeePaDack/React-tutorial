import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from "./UserList";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/userList" element={<UserList/>}/>
                <Route path="/todoList" element={<TodoList/>}/>

                {/* <Link to = "/userList" /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
