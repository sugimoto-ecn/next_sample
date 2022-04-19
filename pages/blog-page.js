import Layout from "../components/Layout"
import {getAllPostData} from "../lib/posts"
import Post from "../components/Post"

const Blog = ({posts}) => {
  return (
    <Layout title="Blog">
      <ul>
          {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
      </ul>
    </Layout>
  )
}

export default Blog

export async function getStaticProps(){
    const posts = await getAllPostData();

    return {props:{posts}}
}