import React, { useState } from 'react';

const DateTest = () => {
    // const today = new Date();
    // 현재 날짜를 가져옵니다.
    
    // const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    // 원하는 형식으로 날짜를 설정합니다.

    const dateNow = new Date();
    const today = dateNow.toISOString().slice(0,10);
    const [saleStartDate, setSaleStartDate] = useState(today);
    return (
        <div>
            <h1>date</h1>
        
            <form>
                <label>
                    예약 날짜 지정
                    <br/>
                    <input type='date' min="" max="2024-08-01" required />
                </label>
            </form>
            
            <h1>---------------------</h1>

            <input
                id="date"
                label="판매 시작일"
                type="date"
                defaultValue={today}
                onChange={(e) => setSaleStartDate(e.target.value)}
                inputProps={{ min: today }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
        </div>
    )
}

export default DateTest;