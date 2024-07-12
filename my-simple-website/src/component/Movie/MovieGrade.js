import React, {useEffect, useState} from 'react';
// 영화 평점 사이트   Movie Grade(Rating) Site
import axios from 'axios';
// 추후 css 추가 예정
import './MovieGrade.css';

const MovieRating = () => {
    const [영화들, set영화들] = useState([]);
    const [로딩, set로딩] = useState(true);

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then(res => {
            // 위 url 은 [] 가 아니라 {} 에서 시작하므로 {} 데이터를 감싸줄 
            // 임의의 변수명 res 사용  res = [] .data 데이터를 가져오겠다
            // 주소값에 key 이름으로 작성된 data 에서 movie 라는 키 값 안에 적힌 title 과 이미지들을 가져올 것
            //        [   {    data{movie} 를 가져올 것 }]
            set영화들(res.data.data.movies); // {} 중괄호 들에서 data 를 가지고 오겠다.

            // 영화 데이터를 모두 가지고오면 로딩중을 false 로 변환
            set로딩(false);
        })
        .catch(err => {
            alert(err + "발생했습니다.");
        });
    }, []);
    // 만약 로딩중이라면  로딩 div 보여주겠다
    // 자바스크립트에서 innerHTML 을 사용했던 것 처럼 react 에서도 innerHTML 을 사용할 수 있음
    if(로딩) return <div>로딩중 입니다.</div>;
    /*
    trick
    영화 데이터에서 이미지가 있기 때문에 데이터를 느리게 가지고 옴
    사용자에게 화면이 보여지기 전에 로딩중이라는 표시를 보여줌으로
    사용자는 조금 더 기다릴 수 있는 시간을 갖게 됨

    처음에 로딩 true 로 설정해서 임시화면을 띄어놓고
    데이터를 모두 가지고 오면 로딩을 false 로 변경해서 기존 리턴에 작성한 html 코드를 보여줌

    if(로딩) return <div>로딩중 입니다.</div>;

    ↕ 코드는 동일한 코드   동일한 기능을 작동

    if(로딩) {
        return (
            <div>로딩중 입니다.</div>;
        )
    }
    */
 
    return (
        <div className='movie-container'>
            <h1>평점좋은 영화들</h1>
            <div className='movie-content'>
                {영화들.map(영화 => (
                    <div key={영화.id} className='movie'>
                        <img src={영화.medium_cover_image}/>
                        <h2>{영화.title}</h2>
                        <p>평점 : {영화.rating}</p>
                        <p>년도 : {영화.year}</p>
                        <p>러닝타임 : {영화.runtime}분</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieRating;