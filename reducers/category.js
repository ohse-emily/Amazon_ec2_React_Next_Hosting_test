
const initialState ={
    menu:[  // server db 에서 이렇게 데이터가 왔다고 가정 
        {
            id: '1',
            category: '대분류메뉴1',
            url: '/posts/1'
        },
        {
            id: '2',
            category: '대분류메뉴2',
            url: '/posts/2'
        },
        {
            id: '3',
            category: '대분류메뉴3',
            url: '/posts/3'
        },
        {
            id: '4',
            category: '대분류메뉴4',
            url: '/posts/4'
        },
        {
            id: '5',
            category: '대분류메뉴5',
            url: '/posts/5'
        }
    ]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default reducer