import Head from 'next/head'
import {useRouter} from 'next/router'
import { siteMeta } from 'lib/constants'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc }) {

    const title = pageTitle ? '${pagetitle} | ${siteTitle}' : siteTitle
    
    const desc = pageDesc ?? siteDesc
    
    const router = useRouter()
    const url = '${siteurl}${router.asPath}'

    return (
        <Head>
            <title>{pageTitle} | {siteTitle}</title>
            <meta property="og:title" content={'${pageTitle} | ${siteTitle}'} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og.url" content={url} />

            
        </Head>
    )
}