import React,{useContext, useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"; // 버튼 클릭 없이 위치 설정
import AuthContext from "./layout/AuthContext";
/*
useLocation : URL 의 정보를 포함한 객체
              경로, 해시, 문자열 값 등을 가지고 온 객체
*/
function NaverSignup() {
    const [userInfo, SetUserInfo] = useState(null);
    /***** 2024-08-12 비밀번호 값 설정 추가 *****/
    const [password,setPassword] = useState(""); // 비밀번호 상태 추가
    /*****                             ******/

    const location = useLocation();
    const [loading, setLoading] = useState(true);

    const {loginMember} = useContext(AuthContext);

    // 어떤 클릭이 없어도 UserInfo 페이지 들어오면 자동으로 실행되는 효과
    useEffect(() => {
        // URLSearchParams : URL 에서 ? 뒤에 붙는 키-밸류 값을 가져옴
        // String redirectUrl = "http://localhost:3000/userinfo?access_token=" + accessToken;
        // userinfo? 뒤에 붙는 access_token 에 있는 데이터를 포함
        const a = new URLSearchParams(location.search);
        const accessToken = a.get("access_token"); // URLSearchParams 가져온 수많은 값 중에서 키 이름이 access_token 인 값만 가져오겠다
        console.log("토큰 확인 : " + accessToken);

        // get 을 이용해서 userinfo 정보 가져오기
        // String redirectUrl = "http://localhost:3000/userinfo?access_token=" + accessToken
        // Java 에서는 userinfo?access_token=" + accessToken 로 + 사용해 변수를 사용했지만
        // JS 에서는 `` 를 사용해서 const accessToken = a.get(`access_token`); 가져옴

        // 만약 accessToken 값이 존재하면 axios 발동
        if(accessToken){
            axios.get(`/userinfo?access_token=${accessToken}`)
            // .then((res) => ){}  (res) 를 막아버리면 => 이후로는 res 선언되지 않음
            // 지역 변수명이 되기 때문에 res 를 찾을 수 없는 것
            .then(response => {
                SetUserInfo(response.data);
                setLoading(false);
            })
            .catch((err) => {
                alert("정보를 가져오지 못했습니다.");
            });
        }
     

    },[location.search]); // location.search 로 검색된 키-값중 access_token = abc123
    // access_token,

    if(loading){
        return <div>데이터 정보 가져오는 중...</div>
    }

    // 회원가입기능 만들기 React 에서 Java 로 데이터를 보낼 것
    // 데이터를 어디서 보낼 것이냐면 /NaverAPI/register 위치에서 만나 데이터를 주고 받을 것
    const 회원가입기능 = () => {
        // 비밀번호 비어있으면 
        if (!password) { // !password = 비밀번호가 없다
            alert("비밀번호를 입력해주세요");
            return;
        }

        // 물건같은 데이터를 특정 장소에 전달하러가기
        // axios.post(어디서 만날 것인지 특정 위치 설정, {주고 받을 데이터 설정}) 
        // axios.post('http://서울특별시/강남구/역삼역', {아이디, 이메일, 비밀번호 를 전달할 것})
        axios.post('http://localhost:9010/NaverAPI/register', {
            id : userInfo.response.id,
            email : userInfo.response.email,
            nickname : userInfo.response.nickname,
            name : userInfo.response.name,
            gender : userInfo.response.gender,
            profileImage: userInfo.response.profile_image,
            password: password
        })
        .then(response => {
            console.log(response.data); // 개발자가 무사히 DB 에 들어갔는지 확인
            alert("회원가입이 완료되었습니다.") // 클라이언트가 무사히 회원가입을 완료했는지 확인
        })
        .catch(e =>{
            console.error('개발자가 에러 확인 하는 공간 ',e)
            alert("회원가입에 실파했습니다.");
        })
    }

    return (
        <>
            <h1>유저정보</h1>
            {userInfo ? (
                <div>
                    <input type="text" value={userInfo.response.id} disabled />
                    <input type="email" value={userInfo.response.email} disabled />
                    <input type="text" value={userInfo.response.nickname} disabled />
                    <input type="text" value={userInfo.response.name} disabled />
                    <img src={userInfo.response.profile_image} disabled />
                    <input type="text" value={userInfo.response.age} disabled />
                    <input type="text" value={userInfo.response.gender} disabled />
                    <input type="text" value={userInfo.response.mobile} disabled />
                    <input type="text" value={userInfo.response.birthday} disabled />
                    <input type="text" value={userInfo.response.birthyear} disabled />
                    {/* 네이버에서 가져온 id 값을 input 에 넣어주고 수정하지 못하게 막음 처리 */}
                </div>
            ) : (
            <p>유저를 찾을 수 없습니다.</p>
            )}
            <div>
                <h2>회원가입에 필요한 아이디 및 비밀번호 작성하기</h2>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                {/*
                <input type="password" value={password} onChange={비밀번호변경하기}/>
                
                const 비밀번호변경하기 = () => {
                    setPassword(e.target.value)
                }
                */}

                <button onClick={회원가입기능}>회원가입하기</button>
                {/* <button onClick={handle회원가입기능}>회원가입하기</button> */}
            </div>
        </>
    )

}

export default NaverSignup;