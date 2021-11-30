import Document, { Html, Head, Main, NextScript } from 'next/document'

const desc = "CASTROAI | Custom Web Application Development";
const pageTitle = "Castro AI LLC";
const twitterHandle = "";
const currentURL = "https://www.castroai.com";
const previewImage =
  "https://images.ctfassets.net/t2fhl88kz6ha/4Riwo6PGRC2mEnd8ZzDxg3/bd11a6285887056d952ed4436dba32f5/pexels-thisisengineering-3861972.jpg";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
   
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={pageTitle} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
            {/* <script
          async
          id="slcLiveChat"
          src="https://widget.sonetel.com/SonetelWidget.min.js"
          data-account-id="207850791"
        ></script> */}
        </body>
      </Html>
    )
  }
}