import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; // 모두 사용하는 css 는 index 에 설정


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  /* <React.StrictMode> 
     </React.StrictMode> 
     삭제가능
  */
);

reportWebVitals();
