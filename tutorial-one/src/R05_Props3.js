const 실습3번 = (props) => {
    const {num, name, age, gender, phone} = props;

    return(
        <div className="info-ex">
            번호 : {num} / 이름 : {name} / 나이 : {age} / 성별 : {gender} / 폰 : {phone}
        </div>
    );
}

export default 실습3번;