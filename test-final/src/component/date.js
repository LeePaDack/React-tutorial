import React from 'react';

const Date = () => {
    const today = new Date();
    // 현재 날짜를 가져옵니다.
    
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    // 원하는 형식으로 날짜를 설정합니다.
    return (
        <div>
            <h1>date</h1>
        
            <form>
                <label>
                    예약 날짜 지정
                    <br/>
                    <input type='date' min="2024-07-23" max="2024-08-01" required />
                </label>
                <Dday>{formattedDate}</Dday>
            </form>
        </div>
    )
}

export default Date;