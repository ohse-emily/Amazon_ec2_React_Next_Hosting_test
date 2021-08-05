export const reducer =(state,action)=>{
    switch(action.type){
        case 'login':
            return{
                ...state,
            }
        case 'logout':
            console.log('로그아웃')
            return{
                ...state,
                IsLogin:false,
            }
    }
}