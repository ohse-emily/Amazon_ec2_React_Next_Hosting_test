import Styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Accordion = ({ visible, handleToggle }) => {
    // const handleClick=(e)=>{
    //     handleToggle()
    // }
    const {menu} = useSelector((state)=>state.category)

    const category = menu.map((v, k)=>{
        return <li key={v.id} onClick={handleToggle}>
            <Link href={v.url}>
                <a>{v.category}</a>
            </Link>
        </li>
    })
    return (
        <AccordionMenu flag={visible}>
            <ul>
                {category}
            </ul>
        </AccordionMenu>
    )
}

export default Accordion


const AccordionMenu = Styled.div`
    position:absolute;
    width:100%;
    left:0px;
    top:10vh;
    z-index:5;
    background: #fff;
    padding:7vh 0;

    // ()=>{} 근데 {} 요 괄호를 생략해줌
    // props 가 가르키는것 : Accodion 이 가진 모든props를 말함 
    display:${(props) => (props.flag) ? 'block' : 'none'};

    & > ul{
        margin-top:5vh;
        display:flex;
        flex-direction:column;
    }

    &>ul>li{
        margin-top:20px;
        text-align:center;
    }

`