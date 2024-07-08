// Routes, Route import 해서 링크 설정
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contect from "./component/Contect";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar/> {/* 링크들 모음이 시작되기 전에 네비게이션 바에 이동경로가 보이게 설정 */}
      <Routes> {/* 링크들 모음집이라는 설정 */}
        {/* 
        Java 에서 
        @GetMapping("/") 으로 주소를 설정해 주는 것이 React 에서
        path="/" 임
        return "HTML파일명" 으로 보여줄 화면 설정 해주는 것이
        element{<Home /> 임

        단, index.js 는 React 에서 이미 사용하고 있는 이름이기 때문에
        Index.js 나 index 로 시작하는 이름은 피하는게 좋음
        */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contect" element={<Contect/>}/>
      </Routes>
    </div>
  );
}

export default App;
