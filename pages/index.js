import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from 'next/head'



const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="I post about everything" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage