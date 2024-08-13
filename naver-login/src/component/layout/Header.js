import React, {useContext} from "react";
import AuthContext from "./AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
    const {loginMember, setLoginMember} =useContext(AuthContext);
/*
    [] 변수를 새로 설정
    const [loginMember, setLoginMember] =useContext(AuthContext);
    
    {} 외부에서 작성된 변수를 가져와서 사용할 때 설정
    const {loginMember, setLoginMember} =useContext(AuthContext);
*/

    // localStorage : 고객 컴퓨터 웹사이트에 데이터를 영구적으로 저장
    // localStroage 에 저장된 데이터는 브라우저를 닫거나 컴퓨터를 껐다 켜도 유지
    // 사용자가 타이머를 맞춰서삭제하거나, 로그아웃. 캐시를 지우지 않는한 유지
    // 데표적으로 구글 크롬 로그인
    const handle로그아웃기능 = () => {
        setLoginMember(null);
        localStorage.removeItem('loginMember');
    }
    
    return(
        <header>
            <h1>헤더부분</h1>
            <nav>
                {/* {loginMember가 ? (참이라면) : (거짓이라면)} */}
                {/* 
                                                  java dto.NaverUser 에 지정된 변수명 중 이름을 갖고오고 싶다면 name
                                                  왜냐면 NaverUser 에 private String name; 으로 작성했기 때문
                {loginMember ? (<span>환영합니다. {loginMember.dto 에 저장된 변수명} 님</span>) : ()} */}
                {loginMember ? (
                    <div>
                        <span>
                            환영합니다. {loginMember.name} 님
                        </span>
                        <button onClick={handle로그아웃기능}>로그아웃</button>
                    </div>
                    ) : (
                        <div>
                            <Link to='/login'>로그인하기</Link>
                            <Link to='/api/naver'>회원가입하기</Link>
                        </div>
                        )}
            </nav>
        </header>
    )
}

export default Header;