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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
