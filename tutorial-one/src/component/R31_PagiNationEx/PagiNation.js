import './PagiNation.css';
const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemPerPage);  // 전체 페이지수 계산하고 올림처리
    for(let i = 1; i <= totalPages ; i++){
        pageNumbers.push(i); // push : 값을 추가 페이지 번호들에 만들어진 번호들을 추가
    }

    // 페이지 번호 새로고침 함수
    // 모든 페이지 번호를 한번에 보여주는 것이 아니라 10 개씩 보여줄 것
    const renderPageNumber = () => {
        if(totalPages <= 10){
            return pageNumbers;
        }

        // 시작페이지 번호
        // 현재 페이지에서 - 5 = 현재 페이지에서 5 를 뺀 값
        // 현재 페이지를 중심으로 해서 앞쪽에 있는 5 개의 페이지번호를 표시할 수 있도록 설정
        // 시작 페이지 번호가 - 가 나올 것을 방지 Math.max
        // Math.max(1, -2) 시작페이지번호는 무조건 1 
        // Math.max(1, 현재페이지가8 - 5 = 3) 시작페이지는 무조건 3
        // Math.max(max 가 되는 숫자 작성, 문지기처럼 이 밑으로는 max 값을 못가져오도록 설정, 숫자 비교값)
        const startPage = Math.max(1, currentPage - 5);

        // 끝 페이지 번호
        // totalPages = 가장 큰 수
        // 끝 페이지 번호는 전체 페이지 수를 초과할 수 없기 때문에
        // 전체페이지 수인 totalPages 가 문지기처럼 이 이상으로 값을 못가져오도록 설정
        // Math.min(totalPages, currentPage + 4) / 15 이상의 수가 들어올 수 없도록 마지노선 설정
        const endPage = Math.min(totalPages, currentPage + 4);
    
        // 현재 페이지를 중심으로 해서 최대 10 개의 페이지 번호를 전달
        // startPage
        // 배열의 인덱스는 0
        // 인덱스값을 맞추기 위해 1 - 1 = 0 ~ 마이페이지
        // 예를들어 시작페이지가 3/ 마지막 12  => 2, 12 가 돼서 번호 3 ~ 12 까지
        return pageNumbers.slice(startPage - 1, endPage);
    
    
    }

    return (
        <nav>
            <ul className='pagination'>
                {/* 페이지 수 10 개 까지만 보여주고 */}
                {/* << 화살표 이용해서 이전으로 기능 만들기 */}
                {currentPage > 1    && (
                    <li>
                        <a onClick={() => paginate(currentPage-1)} href='!#' className='page-link'>
                            &laquo;
                        </a>
                    </li>
                )}

                {/* 모든 페이지 번호 */}
                {renderPageNumber().map(number => (
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
                {currentPage < totalPages && ( 
                    <li>
                        <a onClick={() => paginate(currentPage +1)} href='!#' className='page-link'>
                            &raquo;
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination;