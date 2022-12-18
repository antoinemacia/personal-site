import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/modelviewer.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
