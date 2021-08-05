import '../index.css'
import Head from 'next/head'
import Store, { initialState } from '../store/context'
import { useReducer, useContext } from 'react'
// Redux
import { reducer } from '../reducers'
import wrapper from '../store/configureStore'

const App = ({ Component }) => {

    const globalContext = useContext(Store) // context에 있는 값을 그대로 빼와서 담음 

    const [state, dispatch] = useReducer(reducer, globalContext)

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
            </Head>
            <Store.Provider value={{ state, dispatch }}>
                <Component /> {/* 우리가 만든 파일(index,login..)들이 여기에 위치 */}
            </Store.Provider>
        </>
    )
}
// App을 withRedux에 감싸서 보내기 
export default wrapper.withRedux(App)