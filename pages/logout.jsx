// import Store from '../store/context'
import { useContext, useEffect } from 'react'
import Router from 'next/router'
//redux
import { useDispatch } from 'react-redux'
import { UserLogoutAction } from '../reducers/user'

const logout=()=>{

    // const {dispatch} = useContext(Store)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(UserLogoutAction())

        setTimeout(()=>{
            Router.back()
        },1000)
    },[]) // 빈배열일 경우render 완료 되었을 때 딱 한번 실행되는 코드가 됨 

    return(
        <>
            logout 
        </> 
    )
}
export default logout 