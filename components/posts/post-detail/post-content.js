import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import PostHeader from './post-header'

import classes from './post-content.module.css'

const PostContent = (props) => {
    const { post } = props

    const image = `/images/posts/${post.slug}/${post.image}`
    const customRenderers = {
        // image(image) {
        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
        // },
        paragraph(paragraph) {
            const { node } = paragraph
            if (node.children[0].type === 'image') {
                const image = node.children[0]
                return <div className={classes.image}>
                    <Image src={`/images/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300} />
                </div>
            }
            return <p>{paragraph.children}</p>
        },
        code(code) {
            const { language, value } = code
            // eslint-disable-next-line react/no-children-prop
            return <SyntaxHighlighter style={atomDark} language={language} children={value} />
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={image} />
            <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent