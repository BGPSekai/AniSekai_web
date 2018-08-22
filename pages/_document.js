// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
		const { title } = this.props.__NEXT_DATA__.props.initialProps;
    return (
      <html lang="zh-tw">
        <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <title>{title||'Ani Sekai'}</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
