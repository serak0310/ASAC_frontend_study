import { useState } from "react"
import data from "./datasource/init.json"

const TodoList = ()=>{

    const [list, setList] = useState(data)  // useState(초기데이터)
    const [inputValue, setInputValue] = useState("")    // setInputValue를 이용해서 inputValue에 데이터 넣기

    // CRUD
    // create read update delete

    // 실시간 변화를 감지해 로그 출력
    const handleOnChange = (data) => {
        console.log(data);
        setInputValue(data);
    }

    // 입력 버튼 클릭 시 리스트에 추가
    const handleOnClick = () =>{
        const newData = {
            id: list.length+1,
            content: inputValue,
            isChecked: false
        }

        // ...list: 리스트 복사. 스프레드 연산자.
        setList([...list, newData]);
        setInputValue("");
    }

    // return 값 내의 컴포넌트는 하나로 묶여있어야 함
    // <></> || <div></div> 이용
    return (
        <div>
            <input onChange={(e)=>handleOnChange(e.target.value)}></input>
            <button onClick={handleOnClick}>입력</button>
            {
                // data를 바로 가져오지말고 list로 복사해서 가져옴
                // 원본 데이터를 유지하기위해
                list.map((d)=>{     // d: 데이터를 하나하나 들림
                    return (
                        <>
                        <ul>
                            <li>
                                <div style={{
                                        textDecoration : d.isChecked ? "line-through" : "none"
                                    }}>
                                    {d.content}
                                </div>
                                {/* <div>{d.id}</div>
                                <div>{d.isChecked}</div> */}
                            </li>
                        </ul>
                        </>
                    )
                })
            }
        </div>
    )
}

export default TodoList;