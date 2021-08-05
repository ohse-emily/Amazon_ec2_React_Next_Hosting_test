import {HYDRATE} from 'next-redux-wrapper'

import { combineReducers } from "redux"
import user from './user'
import category from './category'

//인자값 1개 객체만 받는다. 
const reducer = combineReducers({
    index: (state={}, action)=>{
        switch(action.type){
            case HYDRATE:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },
    //user는 user.js파일에서 미리 함수로 만들어 놓아서 import 함수만 해오면 됨 
    user,  // == user:user 
    category,
})

export default reducer 