import { toPlainText } from '@portabletext/react'
import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface IndexPageHeadProps {
  settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle

  return (
    <Head>
      <title>{title}</title>
      <BlogMeta />
      <meta
        key="description"
        name="description"
        content={toPlainText(description)}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4263718599763691"
     crossOrigin="anonymous"></script>
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
<meta name="google-site-verification" content="uumGUX0jTSsn6zc8r24577ORBnBJSmX8lhXEjzBlUG8" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4263718599763691"
     crossOrigin="anonymous"></script>
    </Head>
  )
}
