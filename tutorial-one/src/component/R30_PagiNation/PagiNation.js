import React from 'react';
import './PagiNation.css';
/*
itemPerPage  : 한 페이지에 보여줄 항목 수
totalItems   : 전체 항목 수
paginate     : 페이지 번호를 업데이트 하는 함수
currentPage  : 현재 보고 있는 페이지 번호
*/
const PagiNation = ({itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];

    // 전체 항목수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산하고
    // pageNumbers 에 페이지 번호를 저장시킬 것
    /*
    전체 항목 수 : 53
    한 페이지 당 보여줄 항목 수 : 10

    53 / 10 = 5.3 
    ceil = 올림 5.3 -> 6
    */
    for(let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++){
        console.log("Pagination i 값 : " + i);
        pageNumbers.push(i); // push : 값을 추가 페이지 번호들에 만들어진 번호들을 추가
    }

    
    return (
        <nav>
            <ul className='pagination'>
                {/* className={`page-item ${currentPage === number ? 'active' : ''}`} 
                    page-item 이라는 className 이 존재
                    만약에 현재 페이지와 map 에서 가리키는 번호가 일치하다면 
                    className = "page-item active"
                    현재 페이지번호와 map 에서 가리키는 번호가 다르다면
                    (현재 페이지 이외 다른 페이지 번호들)
                    className = "page-item"
                */}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' :''}`}> 
                        {/* 
                        !# : 클릭 이벤트가 발생했을 때 페이지가 새로고침 되는 것을 방지 
                        <a onClick={(e) => {e.preventDefault(); paginate(number); }} href='/'>
                        */}
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PagiNation;