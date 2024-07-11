import React, {useState} from 'react';
import axios from 'axios';

const Axios_Ex2 = () => {
    const [data, setData] = useState(null);
    
    const 불러오기버튼 = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.data);
        })
        .catch(() => {
            alert("데이터 가져오기에 실패했습니다.");
        });
    }

    return (
        <>
            <h1>json 내용 가져오기</h1>
            <button onClick={불러오기버튼}>불러오기</button>
            <br></br>
            {data && <textarea rows={20} cols={80} value={JSON.stringify(data,null,4)} readOnly={true}/>}
        </>
    )
}

export default Axios_Ex2;