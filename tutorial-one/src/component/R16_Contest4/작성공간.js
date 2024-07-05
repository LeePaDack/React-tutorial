import React, {useState, useContext} from "react";

import 유저정보모두저장 from './유저정보모두저장';
// input 타입을 만들고 저장하는 버튼을 생성
const 작성하는공간 = () =>{
    const {userList, setUserList} = useContext(유저정보모두저장);
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {
        const 유저 = {"inputName" : inputName, "inputPhone" : inputPhone}
        
        const 새로운유저 = [...userList, 유저];
        setUserList(새로운유저);
    
    }

    return(
        <div>
            <label htmlFor="inputName">이름</label>
            <input type="text"
            id="inputName"
            onChange={(e) => {setInputName(e.target.value)}} value={inputName}></input>

            <br></br>

            <label htmlFor="inputPhone">폰번호</label>
            <input type="text"
            id="inputPhone"
            onChange={(e) => {setInputPhone(e.target.value)}} value={inputPhone}></input>
        
            <button onClick={유저추가}>추가하기</button>
        </div>
    )
}

export default 작성하는공간;