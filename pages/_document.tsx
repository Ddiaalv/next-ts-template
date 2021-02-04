import { Global } from '@emotion/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { globalStyles } from '../utils/globalStyles'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Global styles={globalStyles} />
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Template creado a partir del proyecto de Next.js generado por medio de create-next-app donde se utiliza Typescript y se añaden nuevas "
          />
          <meta
            name="keywords"
            content="template, react, javascript, typescript, next.js, webpack, babel, emotion, styled-components, storybook, jest, react-testing-library, cypress, eslint, prettier, husky, lint-staged, git, github, vercel, PWA"
          />
          <meta name="robots" content="all" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
          <meta name="theme-color" content="#282c34" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
