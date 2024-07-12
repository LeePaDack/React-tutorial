import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Axios_Ex2 = () => {
    const [comments, setData] = useState(null);
    
    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.comments);
        })
        .catch(() => {
            alert("데이터 가져오기에 실패했습니다.");
        });
    },[]);

    return (
        <>
            <h1>json 내용 가져오기</h1>


            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>UserId :</strong>{comment.id} <br></br>
                        <strong>Name :</strong>{comment.name} <br></br>
                        <strong>Email :</strong>{comment.email} <br></br>
                        <strong>Body :</strong>{comment.body} <br></br>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Axios_Ex2;