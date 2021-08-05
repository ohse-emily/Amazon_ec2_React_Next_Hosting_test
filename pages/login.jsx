import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import Router from 'next/router'
import userInput from '../hooks/userInput'
// redux 
import {useDispatch, useSelector} from 'react-redux'
import {UserLoginAction} from '../reducers/user' 

const Login = () => {
    const dispatch = useDispatch()
    const {loadding} = useSelector((state)=>state.user)   // 추가 

    const userid = userInput('')  // object
    const userpw = userInput('')  // object

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const data ={
            userid:userid.value,
            userpw:userpw.value
        }
        //dispatch(UserLoginAction())    // 요렇게 수정 
        //dispatch 안에 넣는게 action -> 여기에 함수 넣기 (thunk)
        await dispatch(UserLoginAction(data))

        // userid.value==="asdf" && userpw.value==="asdf" 
        // ? Router.push('/') : alert('id 또는 pw가 다릅니다.')
    } 

    return (
        <>
            <Head>
                <title>Blog | 로그인</title>
            </Head>
            <FormLayout>
                로그인 페이지입니다. 
                <h2>로그인</h2>
                <form onSubmit ={handleSubmit}>
                    {/* html 형태로 보이게끔 한 JavaScript이다! (bable로 가능케함) */}
                    {/* babel은 type="text" 를 객체로 바꿔줌 type="text" => "type":"text" */}
                    {/* {} 대괄호를 쓰면 JS 구문을 쓸 수 있게 해주겠다.  */}
                    <input type="text" {...userid} placeholder="아이디를 입력해주세욥" />
                    <input type="password" {...userpw} placeholder="패스워드를 입력해주세욮" />
                    {!loadding && <button type="submit">로그인</button>}   
                </form>
            </FormLayout>
        </>
    )
}

export default Login