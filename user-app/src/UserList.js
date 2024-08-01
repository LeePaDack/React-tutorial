import './App.css';
import {useState} from 'react';


function UserList() {
  // 유저 초기 목록과 유저가 추가될 목록을 담을 변수명을 설정
  const [users,setUsers] = useState([]); // 초기 변수인 users 가 아무런 유저 목록을 담고 있지 않기 때문에 users = []; 로 설정
  const [name, setName] = useState(''); // '' useState(''); useState(""); useState(null); 모두 초기값이 아무것도 없는 상태    (1)
  
  const 추가버튼 = () => {
    setUsers([...users, name]) // ... 기존 유저 목록 , 새로운 

    setName("");
  }

  /*  (2)
  const 기능 = () => {
    // return 리턴값; 존재 O (필수는 아님)
  }

  const 기능 = () => (
    // return 리턴값; 존재 X
  )

  ===== Ex =====

  const 인사기능 = () => {
    const 인사메세지 = "안녕하세요";
    
    return 인사메세지;
  }
    <p>{인사기능}</p>


  const 인사기능 = () => (
    alert("좋은 아침 입니다");  
  )
  */

  /*  (3)
   <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
   <button                         onClick ={( ) => 삭제버튼}>삭제하기</button>

   e = 특정 변하는 값이나 변화가 있는 것을 감지
   button 의 경우 클릭만 하고, 특정값이 랜덤으로 설정되는 부분이 없기 때문에
   버튼에서는 e 와 같은 변수명을 생략

   input 의 경우 사용자가 어떤 값을 작성할지 컴퓨터가 모르기 때문에
   사용자가 어떤 값을 입력한다는 것을 이벤트로 받아드리고,
   이벤트가 감지되면 value 값을 가져옴
  */

  // filter = 배열에서 결과가 true 인 값만 반환

  const 삭제버튼 = (index) => {    //   users 에 있는 유저 목록 user = 유저명, i = users 에 있는 유저 번호
    const 삭제후유저목록 = users.filter((user, i) => i !== index);
    /*
     (4)
    const 삭제후유저목록 = users.filter((user, i) => i !== index);
      - 삭제하기를 선택한 번호 한 개만 삭제

    const 삭제후유저목록 = users.filter((user, i) => i === index);
      - 삭제하기를 선택한 번호 이외 모든 번호 지우기
    */

    /* 
    users.filter ((user  , i                   ) => i                 !== index              );
    유저 목록들     유저명, 각 유저가 가입한 번호  => 배열에 저장된 번호 !== 삭제하려고 누른 번호 들만
    유저 목록에 넣어주겠다
    */

    setUsers(삭제후유저목록); // 유저목록 교체하기
  }

  return (
    <div className="App">
      <h1>유저 리스트</h1>

      <h3>유저 추가하기</h3>
      <input type='text' 
             value={name}
             onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={추가버튼}>추가하기</button>

      <h3>유저 리스트 목록 보기</h3>
      <pre><li>인덱스 - 유저명</li></pre>
      {users.map((user, index) => (
        <li key={index}>
          {index} - {user}
          <button onClick={ () => 삭제버튼(index)}>삭제하기</button>
        </li>
      ))}
    </div>
  );
}

export default UserList;
