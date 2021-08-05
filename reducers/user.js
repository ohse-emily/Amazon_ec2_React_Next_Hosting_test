
const initialState = {
    IsLogin: false,
    loadding:false,
}

//const USER_LOGIN = "USER_LOGIN"  // 오타 났을 때 대비 
const USER_LOGOUT = "USER_LOGOUT"
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"

//UserLoginAction 은 middleware thunk 로 인해 사용할 수 있는 것 
// 얘가 실행이 됨
// login.js -> handleSubmit눌렀을 때 실행됨(dispatch) -> 
// user.js -> 아래 코드 실행됨 
export const UserLoginAction = (data) => {

    return async (dispatch)=>{
        dispatch(UserLogin_REQUEST())
        console.log(data, 'data')
        try{ // fetch or axios 성공 fetch:내장 axios : 코드가져와야함
            const response = await fetch('http://localhost:3000/api/login',{
                method:'POST',
                headers:{
                    "Content-type":"application/json",
                },
                // body 내용은 객체이면 안된다 ! 
                body:JSON.stringify({...data})
            })
            const result = await response.json()

            result.result=='ok' ? 
            dispatch(UserLogin_SUCCESS(result))
            :  dispatch(UserLogin_ERROR())

        }catch(e){ // 실패
            dispatch(UserLogin_ERROR())
        }
    }
}

export const UserLogin_REQUEST =(data)=>{
    return {
        type:USER_LOGIN_REQUEST,
        loadding:true,
    }
}
export const UserLogin_SUCCESS=()=>{ 
    return{
        type:USER_LOGIN_SUCCESS,
        loadding:false,
    }
}
export const UserLogin_ERROR=()=>{
    return{
        type:USER_LOGIN_ERROR,
        loadding:false,
    }
}

export const UserLogoutAction = () => {
    return {
        type: USER_LOGOUT
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return{
                ...state,
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                IsLogin:true
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
            }
        // case USER_LOGIN:
        //     console.log('로그인 신호왓다')
        //     return {
        //         ...state,
        //         IsLogin: true

        //     }
        case USER_LOGOUT:
            console.log('로그아웃 ')
            return {
                ...state,
                IsLogin: false
            }
        default:
            return state
    }
}

export default reducer