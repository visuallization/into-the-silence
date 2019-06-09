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
          { process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141715784-1"/>
              <script
                dangerouslySetInnerHTML={{__html: `var code = 'ga-disable-UA-141715784-1';
                if (document.cookie.indexOf(code + '=true') > -1) {
                  window[code] = true;
                }
                function gaOptout() {
                  document.cookie = code + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
                  window[code] = true;
                  window.alert("Google Analytics wurde auf der Seite für Sie deaktiviert.");
                }`}}
              />
              <script
                dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag() {window.dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', 'UA-141715784-1');`}}
              />
            </>
          )}
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
