import React, {useState, useEffect} from 'react';
import PagiNation from './PagiNation';
import axios from 'axios';

const Board = () => {
    // 데이터 정보 가져오는 변수명 작성
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [itemPerPage] = useState(10); // 한 페이지에서 게시글 10 개 씩 보여줌

    // axios 이용해서 항목 가져오기
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            alert(err + "에러 발생 !");
        });
    }, []);

    // 현재페이지에서 첫번째 항목과 마지막 항목을 체크
    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const itemList = data.slice(firstItem, lastItem);

    // 이동할 페이지를 클릭할 때 사용할 핸들러
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <h1>React 페이지네이션 예제</h1>
            {/* ul 태그 안에는 각 항목들의 제목이 보여질 것 */}
            <ul className='list-group mb-4'>
                {itemList.map(item => (
                    <li key={item.id} className='list-group-item'>
                        {item.title}
                    </li>
                ))}
            </ul>
            {/* PagiNation 코드는 아래 온 PagiNation 태그에서 동작 */}
            <PagiNation
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )

}

export default Board;