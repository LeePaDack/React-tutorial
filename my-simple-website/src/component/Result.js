import React from "react";
import './TypingTest.css'

const 결과 = ({텍스트입력, 결과확인}) => {
    const isCorrect = 텍스트입력 === 결과확인;

    return(
        <div className="result">
            <h2>결과</h2>
            {isCorrect? (
                <p>완벽히 작성했습니다.</p>
            ) : (
                <p>틀렸습니다. 다시 시도하세요.</p>
                )
            }
        </div>
    );
};

export default 결과;
