import Link from "next/link"
import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

const Post = ({post}) => {
    if(!post){
        return <div>Loading...</div>
    }

    return (
        <Layout title={post.title}>
            <p className="m-4">
                {"ID : "}{post.id}
            </p>

            <p className="mb-8 text-xl font-bold"> {post.title} </p>
            <p className="px-10"> {post.body} </p>

            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </div>
            </Link>
        </Layout>
    )
}

export default Post

export async function getStaticPaths(){
    const paths = await getAllPostIds()

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const { post:post } = await getPostData(params.id)
    return {
        props:{
            post
        }
    }
}