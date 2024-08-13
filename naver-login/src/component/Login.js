import { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';

const Login = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    // fetch
    const 로그인기능fetch = () => {
        fetch('http://localhost:9010/login', {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({id,password}),
        })
        .then(response => {
            if(response.ok) {
                return response.text();
            }
        })
        .then(result => {
            setMessage(result); // 자바에서 로그인 실패 성공에 대한 메세지를 그대로 사용
        })
        .catch();
    }

    // axois
    const 로그인기능axois = () => {
        axios.post('http://localhost:9010/login',null, {
            params:{
                id:id,
                password : password
            }
        })
        .then (response => {
            console.log(response); 
            if(response.status ===200) { //로그인성공시 200 주소 보임
                setMessage("로그인 성공");
            }else{
                setMessage("로그인 실패");
            }
        })
        .catch(e => {
            setMessage('로그인 중 문제가 발생했습니다.');
        })
    }

    return (
        <div className='login-container'>
            <h3>로그인하기</h3>
            <div>
                <label>
                    ID :
                    <input type="text" placeholder="아이디를 입력하세요." value={id} onChange={(e) => setId(e.target.value)}/>
                </label>
                <label>
                    PW :
                    <input type="password" placeholder="비밀번호를 입력하세요." value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button onClick={로그인기능axois}>로그인하기</button>
                {message && <p>{message}</p>}
                <div className='find-sign-buttons'>
                    <button>아이디 찾기</button>
                    <button>비밀번호 찾기</button>
                    <button>회원가입</button>
                </div>
            </div>
            <label>
                SNS 로 로그인하기
                <img src="/naver_img/btnG_icon_round.png" className='naver-logo-img'/>
            </label>
            
            {/* 
            <button className='naver-login-button'>
                <img src="/naver_img/btnD_icon_round.png"/>
                네이버로 로그인
            </button>
            */}
        </div>
    )

}

export default Login;