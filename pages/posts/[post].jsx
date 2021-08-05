import { useRouter } from 'next/router'
import BlogLayout from "../../components/blogLayout"
import Head from 'next/head'

const data=[           // 응답 받는 임시 data 추가 
    {
        id:'1',
        subject:'my blog',
        content:"html을 왼쪽 위에서부터 내려옵니다",
        data:"2021-07-28",
        hit:'10',
    },
    {
        id:'2',
        subject:'my blog',
        content:"html을 block과 inline 스타일로 나눠집니다",
        date:"2021-07-30",
        hit:'3',
    }
]

const Post = () => {
    const router = useRouter()
    const { post } = router.query //카테고리 번호(이름) (db에 있는 id값)
    //요 id가지고 server에 요청 -> id의 게시물 가져올 수 있도록 

    const list = data.map((v)=>{
        return (
            <div key = {v.id}>
                <ul>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                </ul>
            </div>
        )
    })

    return (
        <>
            <Head>
                <title>Blog | 리스트</title>
            </Head>
            <BlogLayout>
                {post} 리스트 
                <div>
                    {list}
                </div>
            </BlogLayout>
        </>
    )
}

export default Post