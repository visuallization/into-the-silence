// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';
import smoothscroll from 'smoothscroll-polyfill';

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/static/styles/normalize.css" />
          <link rel="stylesheet" href="/static/styles/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
