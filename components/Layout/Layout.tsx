import Head from 'next/head'
import { FC } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { LayoutStyled } from './Layout.styles'
import { LayoutProps } from './Layout.types'

const Layout: FC<LayoutProps> = ({
  children,
  title = 'Next.js + Typescript template',
}) => (
  <LayoutStyled>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Next boilerplate." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutStyled>
)

export default Layout
