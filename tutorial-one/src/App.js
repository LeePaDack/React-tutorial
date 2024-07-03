import './App.css'; /* CSS 를 얻어와 아래 작성된 태그 옆에 className 으로 적용 */
/* 
기본 HTML 에서는 CSS 를 적용할 때 class 라는 이름을 사용하지만
React 에서 작성한 html 에는 css 를 적용할 때 className 이라는 이름을 사용

CSS 나 다른 JS 파일을 가져올 때는 import 를 사용

CSS 를 가져올 때는 
import 'CSS 경로와 CSS 파일명'

JS 를 가져올 때는 
import [여기서 사용할 이름] from 'javascript파일경로/javascript파일명';

R01_ClassComponent.js 를 가져와서 App.js 에 적용
R01_ClassComponent.js R01 이라는 별칭을 사용해서 App.js 적용
*/
import R01 from './R01_ClassComponent.js';
import R02 from './R02_FunctionComponent.js';
import Props1 from './R03_Prop.js';
import Props2 from './R04_Props2.js';
import Props3 from './R05_Props3.js';
function App() {
  return (
    /*
    리엑트는 알아서 새로고침을 주기적으로 자주 진행
    주석 : / * * / -> 설명이나 추가 내용을 작성할 때 사용
           {/ * * /} -> 주로 코드를 주석 처리할 때 사용
    */
    <div className="App-header">
      {/* <R01/> */}
      {/* <R02/> */}
      <Props1 num='1' name='홍길동' age='20' score='90'/>
      <Props1 num='2' name='홍길은' age='30' score='80'/>
      <Props1 num='3' name='홍길금' age='40' score='70'/>
      <h3>Props 예제 2 번 사용하기</h3>
      <Props2 name='강감찬' age='72' gender='남자' />

      {/* 
      - 실습 문제 -
      Props 만들어서
      num = 5 번 name = "김연정" age = "40" gender = "여자" phone = "010-1111-2222"
      가 담기는 R05_Props3.js 만들기

      R05_Props3 div 로 전체 감싸고 className = "info-ex"
      테두리 orange 색 주기
      */}

      <h3>Props 실습 문제</h3>
      <Props3 num = '5' name = "김연정" age = "40" gender = "여자" phone = "010-1111-2222"/>



      {/* 
        <Props2 name='강감찬' age='72' gender='남자' />

        
        Props 객체는 아래와 같은 코드를 한줄로 작성하기 위해 가져온 이름
        <div className="info">
          이름 : 강감찬 / 나이 : 72 / 성별 : 남자
        </div>
      */}
    </div>
  );
}

export default App;