import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts-util"
import Head from 'next/head'

const SingleDetailPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    )
}

export const getStaticProps = (context) => {
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

//When we use getStaticProps with dinamic values we must pair it with getStaticPath
export const getStaticPaths = () => {
    const postFilenames = getPostsFiles()

    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        //pregenerate all slugs in advance
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}

export default SingleDetailPage