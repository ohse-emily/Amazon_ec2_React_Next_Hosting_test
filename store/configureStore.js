import {createWrapper} from 'next-redux-wrapper'
import {applyMiddleware, compose, createStore} from 'redux'
import reducer from '../reducers'   //index 생략 가능
import {composeWithDevTools} from 'redux-devtools-extension'
//thunk 
import thunkMiddleware from 'redux-thunk'


const loggerMiddleware = ({dispatch,getState}) =>(next)=>(action)=>{
    // console.log('action=',action)
    // console.log('dispatch=', dispatch)
    // console.log('getState=', getState)
    console.log(action) 
    return next(action) 
}

const configureStore=()=>{
    const middlewares = [loggerMiddleware,thunkMiddleware] 
    const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

    const Store = createStore(reducer, enhancer)
    return Store
}

// Store 자체를 가지는게 아닌 Store를 return해 주는 함수를 담아야함 
const wrapper = createWrapper(configureStore,{ 
    debug:process.env.NODE_ENV === 'development' 
    //debug:true (개발모드이므로) 와 같은 의미 
})

export default wrapper