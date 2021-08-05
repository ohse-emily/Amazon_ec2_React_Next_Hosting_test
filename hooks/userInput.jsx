import {useState} from 'react'


const userInput  =(defaultValue)=>{
    const [value,setValue] = useState(defaultValue)
    const onChange =e=>{
        setValue(e.target.value)
    }
//useInput에 들어가 있는 상태 value값 은 value에 onChange함수는 onChange함수에 넣기 
    return{  
        value,onChange
    }
}

export default userInput