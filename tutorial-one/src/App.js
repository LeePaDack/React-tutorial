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
import R01 from './R01_ClassComponent';
import R02 from './R02_FunctionComponent';
function App() {
  return (
    <div className="App-header">
      <R01/>
      <p>--------------------------</p>
      <R02/>
    </div>
  );
}

export default App;
