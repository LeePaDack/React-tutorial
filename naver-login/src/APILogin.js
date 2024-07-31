import React, { useEffect, useState } from "react";

const Login = () => {
    const [userInfo, SetUserInfo] = useState('');

    // useEffect 를 활용해서 데이터 가져오기
    // get 이용해서 특정 유저 정보를 가져오는 주소 설정
    useEffect(() => {
        const 유저정보 = () => {
            fetch('http://localhost:9010/userInfo') // HTTP METHOD (PUT GET POST DELETE)
            .then(가져온응답결과 => { // then : fetch 가 java controller 에서 값을 가져왔을 때 실행할 구문
                return 가져온응답결과.json();
            })
            .then(data => { // 위 then 에서 실행한 구문을 바탕으로 데이터 userInfo 에 넣어주기
                SetUserInfo(data);
            })
            .catch(err => { // 위 두 then 모두 문제가 생겼을 때 문제를 catch 할 구문
                console.error("Error user INFO : " , err);
            })
        }

        // 유저정보 기능을 실행하는 구문과
        유저정보();
        
    }, []) // 최초실행인지 주기적으로 계속 실행하는 효과인지 설정
    return(
        <>
            {/* 만약 userInfo 정보가 있으면 로그인 완료이고 정보가 없으면 로그인하기 화면 보여줌 */}

            {/* 삼항 연산자 이용하기 */}
            {userInfo ? ('존재한다면 보여줄 코드') : ('존재하지 않다면 보여줄 코드')}

            {userInfo ? (
                /* userInfo 정보가 있을 때 */
            <div>
                <h1>로그인 완료</h1>
                <div>{JSON.stringify(userInfo, null, 2)}</div>
            </div>
            ) : (
                /* userInfo 정보가 없을 때 */
            <a href="http://localhost:9010/api/naverLogin">
                <img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/>
            </a>
            )}

        </>
    )
}

export default Login;

/*
 {백엔드에서 가져온 값 문자열 처리 (네이버에서 가져온 값, 특정 값을 변환, 두 칸 들여쓰기)}
{JSON.stringify                  (      userInfo      ,         null,       2     )}

JSON.stringify : Java 백엔드에서 가져온 값을 문자열로 변환 
               / Java 에서 가져오는 데이터가 숫자인지, 문자인지 알 수 없는 상태이기 때문에
                 안전하게 한 번 더 문자열로 가져오겠다 설정
/////////////////////////////////////////////////////////////////////////////////////////////////           
userInfo : 가져온 값에서 특정 값을 변경하거나 필터링할 것인가? = 변경 X = null
/////////////////////////////////////////////////////////////////////////////////////////////////
{JSON.stringify                  (      유저정보      ,   가운데 사용하는 예제 작성 ,       2     )}

const 유저정보 = {
    key : Value
    id : "123456",
    name : "홍길동"
    phone : "010-2345-6424"
}

DB에 유저가 작성한 핸드폰 번호 중 - 를 제거하rh 01023456242 로 저장하길 원함

{JSON.stringify(유저정보, 번호변경하기, 2)}

const 번호변경하기 = (key Value) =>{
    // 만약 key 이름이 phone 이라면
    if (key === 'phone') 
        return value.replace("-",""); // - 를 제거, "" 를 사용해서
    }

    즉 01023456462 로 보임

만약 번호를 변경하지 않고 기존에 가져온 유저정보를 그대로 사용할 경우에는
{JSON.stringify(유저정보, null, 2)}
null : 변경 사항없음을 사용하면 됨

*/