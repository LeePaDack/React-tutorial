import { useState } from "react";


const EditForm = ({user, updateUser}) => {
    // 수정하기 폼에 기존에 수정하고자 하는 유저 정보를 넣어주기위해
    // useState(user) 작성

    /*

    userList = [
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },

    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },

    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
    ]



    유저리스트를 item 으로 유저 정보를 1 명씩 전달받음
    전달받은 유저 정보를
    user 라는 변수명에 item 에 담긴 유저 1 명의 정보를 저장
    저장된 user 변수명을 가져와서 EditForm 에 아래와 같이 작성
    const [formData,setFormData] = useState(user);
    user 에 담긴 정보가 formData 라는 변수에 저장

    formData = { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" }
    */
    const [formData, setFormData] = useState(user);

    const 값변경하기 = (e) => { // 값 변경에 대한 e(이벤트) 가 발생하면
        const {name, value} = e.target; // 이벤트가 발생한 곳의 name value 가져옴
        setFormData({...formData,[name] : value});
    }

    // input = e   button = x
    const 수정내용제출하기 = (e) => {
        e.preventDefault();
        updateUser(formData);
    }

    return (
        <>
        <form> {/* 폼 = submit Button, onSubmit */}
            <h2>회원 정보 수정</h2>
            <label>
                이름 : 
                <input type="text" name="name" value={formData.name} onChange={값변경하기}></input>
            </label>
            <label>
                나이 : 
                <input type="number" name="age" value={formData.age} onChange={값변경하기}></input>
            </label>
            <label>
                성별 : 
                <input type="text" name="gender" value={formData.gender} onChange={값변경하기}></input>
            </label>
            <label>
                전화번호 : 
                <input type="text" name="phone" value={formData.phone} onChange={값변경하기}></input>
            </label>
            <button type='button' onClick={수정내용제출하기}>저장하기</button>
        </form>
        </>
    )
}

export default EditForm;