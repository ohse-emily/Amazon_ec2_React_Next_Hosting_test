import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import useInput from '../hooks/userInput'
import {useState} from 'react'

const Join = () => {
    const username=useInput('')
    const userid = useInput('')
    const userphone = useInput('')
    const password = useInput('')

    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const handlePassword = e =>{
        const {value} = {...e.target}
        setPasswordError(password.value!==value)  //에러가 나면 true
        setPasswordCheck(value)
    }

    const [term,setTerm] = useState(false)
    const [termError,setTermError] = useState(false)

    const handleTerm = e=>{
        setTermError(e.target.checked !== true)  //false -> 문제 없음 // 한 줄 if 문 쓰기 편하도록 
        setTerm(e.target.checked)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(password.value !==passwordCheck){
            setPasswordError(true)
            return
        }else{
            setPasswordError(false)
        }

        if(!term){  // term이 false면 
            setTermError(true)
            return;
        }

        console.log({
            username:username.value,
            userid:userid.value,
            userpw:password.vlaue,
            userphone:userphone.value,
        })
    }

    return (
        <>
            <Head>
                <title>Blog | 회원가입</title>
            </Head>
            <FormLayout>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...username} placeholder="이름을 입력해주세요"/>  <br/>
                    <input type="text" {...userid} placeholder="아이디를 입력해주세요"/>  <br/>
                    <input type="password" {...password} placeholder="비밀번호를 입력해주세요"/>  <br/>
                    <input type="password" value = {passwordCheck} onChange={handlePassword} placeholder="비밀번호 확인"/>  <br/>
                    {passwordError &&  <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                    <input type="text" {...userphone} placeholder="핸드폰 번호를 입력해주세요"/>  <br/>
                    <input type="checkbox" checked ={term} id="term" onChange={handleTerm} /> 
                        <label htmlFor="term">약관에 동의해 주십쇼</label> <br/>
                    { termError && <div style={{color:'orange'}}> 약관에 동의해 주십시요22</div>}
                    <button type="submit" >회원가입</button>
                </form>
            </FormLayout>
        </>
    )
}

export default Join