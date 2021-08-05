import Router from 'next/router'
//import styled from './FormLayout.module.css' //요 안의 모든 css를 객체로 변환 
import Styled from 'styled-components'

const Background = Styled.div`
    width:100vw;
    height:100vh;
    background:#eee;
    display:flex;
    align-items:center;
    justify-content:center;

    &>div{
        width:300px;
        height:400px;
        background:#fff;
        padding:20px;
    }
`

const FormLayout = ({ children }) => {
    return (
        <>
            <Background>
                <div>
                    <p onClick={() => Router.back()}>뒤로가기</p>
                    {children}
                    {/* Footer html  // 나중에 footer부분 / header도 따로 compo로 나누기
                    <div className={styled.footer}>
                        copyright &copy; all reserved
                    </div> */}
                </div>
            </Background>
        </>
    )
}

export default FormLayout