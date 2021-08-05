import BlogLayout from "../components/blogLayout"
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <BlogLayout>
                Hello Next
                <div>
                    {/* <img src="/cat.jpg"/>  */}
                </div>
            </BlogLayout>
        </>
    )
}

export default Index