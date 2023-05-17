import { useEffect, useRef } from "react"


export default function Login() {

    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    })

    const handleOnClick = () => {
        alert(`환영합니다! ${inputRef.current.value}`);
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} type="text" placeholder="id"/>
            <button onClick={handleOnClick}>Login</button>
        </>
    )
}