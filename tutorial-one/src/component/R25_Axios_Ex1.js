import React, {useState, useEffect} from 'react';
import axios from 'axios';
// npm install axios

const Axios_Ex1 = () => {
    const [todos, setData] = useState(null);


    useEffect  (() => {  
        axios.get("https://jsonplaceholder.typicode.com/todos") // axios.get("https://스프링부트:8080/상세보기/아이디값")
            // 무사히 잘 가져왔다면 then 으로 data 값 변경
            .then(res => {
                setData(res.todos);
            })
            // 가져오는데 실패했다면 에러 보여주기
            .catch( () => {
                alert("데이터를 가져오는데 실패했습니다.");
            });
    }, []);

    return (
        <>
            <h1>json 안에 작성된 내용 가져오기</h1>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>UserId :</strong>{todo.id ? 'Yes' : 'No'} <br></br>
                        <strong>Title :</strong>{todo.title} <br></br>
                        <strong>Title :</strong>{} <br></br>
                        <strong>Completed :</strong>{} <br></br>
                    </li>
                ))}
            </ul>
        </>
    )
}



export default Axios_Ex1;

/*

    {data && <textarea value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    data && 데이터가 존재한다면
    <textarea 안에 Json 으로 가져온 값을 추가
    value = 값

    JSON.stringify = json 으로 가져온 값을 문자열로 반환 String 으로 생각하고 보겠다.
    (data, null, 2)
    data = json 으로 가져온 데이터
    null = 모두선택          String 으로 어디서부터 어디까지 변환할 것인가? 에서 null 모든 속성을 선택
    2    = 2 칸 씩 들여쓰기  괄호가 바뀔 때마다 2 칸 씩 들여쓰기 하겠다.
 */