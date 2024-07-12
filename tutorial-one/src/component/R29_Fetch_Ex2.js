import React, { useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/photos
// 데이터 가져오기 Fetch API 를 이용해서 실행

const PhotoList = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            return res.json();
        })

        .then(data =>{
            // setUser(data); API 주소에 작성된 모든 데이터 가지고오기
            // 데이터의 일부분만 가지고 오길 원한다면 slice 를 이용
            // slice(처음가져올범위, 어디까지가져올지마무리하는마무리범위)
            setUser(data.slice(0,10)); // 데이터 처음부터 10 개 정보만 가지고 오기
        })
        .catch(error => {
            alert("에러 발생" + error);
            setError(error);
        })
    }, []);

    return (
        <>
            <h1>사진리스트</h1>
            <ul>
                {user.map(users => (
                    <li key={users.id}><br/>
                        <img src={users.thumbnailUrl}></img>
                        {users.title} <br/>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default PhotoList;
// ↑ 는 맨 아래 작성