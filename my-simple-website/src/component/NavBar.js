import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="game">숫자 맞추기 게임</Link></li>
                {/* <li><Link to="gameTwoStep">숫자 맞추기 게임 2</Link></li> 
                    2 단계 링크를 작성 하지 않음
                    1 단계 통과해야 2단계 링크를 보여줄 것이기 때문
                */}
                <li><Link to="/todoList">할 일 목록 작성하기</Link></li>
                <li><Link to="/TicTapToe">틱탭토 게임</Link></li>
                <li><Link to="/typingTest">타이핑 게임</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;