import React, {useEffect, useState} from 'react';
// 영화 평점 사이트   Movie Grade(Rating) Site
import axios from 'axios';
// 추후 css 추가 예정

const MovieRating = () => {
    const [영화들, set영화들] = useState([]);

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then(res => {
            // 위 url 은 [] 가 아니라 {} 에서 시작하므로 {} 데이터를 감싸줄 
            // 임의의 변수명 res 사용  res = [] .data 데이터를 가져오겠다
            // 주소값에 key 이름으로 작성된 data 에서 movie 라는 키 값 안에 적힌 title 과 이미지들을 가져올 것
            //        [   {    data{movie} 를 가져올 것 }]
            set영화들(res.data.data.movies); // {} 중괄호 들에서 data 를 가지고 오겠다.
        })
        .catch(err => {
            alert(err + "발생했습니다.");
        });
    }, []);

    return (
        <div className='movie-container'>
            <h1>평점좋은 영화들</h1>
            <div className='movie-content'>
                {영화들.map(영화 => (
                    <div key={영화.id} className='movie'>
                        <img src={영화.medium_cover_image}/>
                        <h2>{영화.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieRating;