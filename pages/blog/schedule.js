import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

export default function Schedule({
    title,
    publish,
    contents,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'
    
    const post = await getPostBySlug(slug)

try {
    const res = await resPromise
    console.log(res)
    } catch (err) {
    console.log(err)
}


    return {
        Props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}