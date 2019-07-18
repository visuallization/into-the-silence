// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <title>In die Stille gehen</title>
          <meta
            name="description"
            content={
              `Achtsamkeitspraxis zur Förderung innerer Ruhe und Lebendigkeit.
              Individuelle Begleitung für Zeiten der Sammlung und Ruhe.
              Terminvereinbarung via Mail.`
            }
          />
          <meta property="og:image" content="/static/img/forest_walking.jpg" />
          <link rel="stylesheet" href="/static/styles/normalize.css" />
          <link rel="stylesheet" href="/static/styles/main.css" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
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
                gtag('config', 'UA-141715784-1', { 'anonymize_ip': true });`}}
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
