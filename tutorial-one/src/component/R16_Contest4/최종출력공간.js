import React, {useState} from "react";

import 유저정보전달 from './유저정보모두저장.js';
import 작성공간 from './작성공간.js';

// 작성하는 칸을 가져오고 출력도 할 수 있도록 해주는 컴포넌트
const 최종출력공간 = () => {
    const [userList, setUserList] = useState([]);

    return(
        <유저정보전달.Provider value={{userList, setUserList}}>
            <작성공간/>    

            {/* 가입한 유저의 정보를 출력하기 */}
            <div>
                {userList.map((유저, index) => {
                    return(
                        <ul key={index} 번>
                            <li>index : {index} 번 째 유저</li>
                            <li>name : {유저.inputName} 번 째 유저</li>
                            <li>phone : {유저.inputPhone} 번 째 유저</li>
                        </ul>
                    )
                })}
            </div>
        </유저정보전달.Provider>
    )
}

export default 최종출력공간;