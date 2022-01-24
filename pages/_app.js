import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <AnimatePresence exitBeforeEnter>
      <Head key="head">
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
