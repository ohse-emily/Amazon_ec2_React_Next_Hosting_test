export const reducer =(state,action)=>{
    switch(action.type){
        case 'login':
            return{
                ...state,
            }
        case 'logout':
            console.log('๋ก๊ทธ์์')
            return{
                ...state,
                IsLogin:false,
            }
    }
}