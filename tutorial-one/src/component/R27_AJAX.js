import React from "react";
// React 에서는 거의 axios 사용

const Ajax_Fetch = () => {
    return (
        <>
            <h1>Ajax 와 Fetch</h1>
            <pre>
                Ajax 는 서버와 통신해서 웹 페이지를 새로고침 하지 않고
                데이터를 가져오거나 보낼 수 있게 해주는 기술
                jquery 로 이용되는 javascript 에서 많이 사용

                React 는 Ajax 대신 fetch API 또는 Axios 와 같은 라이브러리를 사용

                여기서 Q&A 
                fetch API : 리엑트에 내장되어 있는 API 를 가져와서 사용
                    API(Application Programming Interface) - 기술 연결 주소
                    어떤 기술을 주소값으로 가져와 사용하거나 데이터를 보여주겠다 할 때 사용하거나
                    
                    Ex) 마이페이지 api 가 무엇인가?  
                        → (마이페이지 주소가 무엇인가?)
                    Ex) 로그인 백엔드 api 가 어떻게 돼요?  
                        → (로그인 데이터를 가져올 수 있는 백엔드 주소가 어떻게 돼요?)
                    Ex) 게시판에서 게시물이 안보여요 API 가 잘못된 것 같아요.  
                        → (백엔드에서 데이터를 가져오는 주소가 잘못됐거나 그 안에 코드가 이상하다.)
                

                Axios 라이브러리 : npm install axios 를 사용해서 외부에서 만들어진 기능을 
                                  가져와서 사용
                                  기능은 어디서 가져오는가? 
                                    → npmJs 로 되어있는 홈페이지게 기입
                                    <a href="http://www.npmjs.com/">npm 으로 이동하기</a>
            </pre>

            <h3>사용 예제 코드</h3>
            <p>** 따로 설치 X</p>
            <pre>{/* 
                fetch('api주소작성')   // Java 에서 try 와 같은데 주소 불러올 주소가 적힌 try
                    // 1. 데이터 무사히 가져왔으면 json 으로 파일 전달
                    .then(res => {
                            return res.json(); // 2.
                        })
                    // 만약 데이터가 무사히 들어왔다면
                    .then(데이터 => { // try 안에 적힌 if 문으로 만약에 어떤 데이터를 가져오는데 성공했다면
                        실행할 코드 작성; // 조건에 맞는 데이터가 들어왔을 때 실행할 코드 작성
                    })
                    // 만약에 데이터 가져오는데 실패했다면
                    // 에러 출력할 변수로 e 사용
                    .catch( e => { // Java 에서 catch 문 또는 else 에러가 발생했을 때 보여줄 에러 출력
                        실행할 코드 작성;
                    });

                */}
            </pre>
        </>
    )
}

export default Ajax_Fetch;