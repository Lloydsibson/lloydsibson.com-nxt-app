/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* GOOGLE TAG MANAGER */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZP5NRH');`,
          }}
        />
        {/* <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lloydsibson.com/" />
        <meta
          property="og:title"
          content="Lloyd Sibson BA | Front End Developer & UI/UX Designer"
        />
        <meta
          property="og:description"
          content="Developer at NEXT with over 7+ years commerical experience | Worked with 200+ brands such as Rolex, Nike, Gucci & Adidas | Founder of Monocode & UI Developer at Arclight Music."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1596712667/img/new-social-share-2020-2.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lloydsibson.com/" />
        <meta
          property="twitter:title"
          content="Lloyd Sibson BA | Front End Developer & UI/UX Designer"
        />
        <meta
          property="twitter:description"
          content="Developer at NEXT with over 7+ years commerical experience | Worked with 200+ brands such as Rolex, Nike, Gucci & Adidas | Founder of Monocode & UI Developer at Arclight Music."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1596712667/img/new-social-share-2020-2.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://res.cloudinary.com/cloudinary-ls-images/raw/upload/v1557013674/favicon/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013674/favicon/safari-pinned-tab.svg"
          color="#00b5b8"
        />
        <meta name="apple-mobile-web-app-title" content="Monocode App" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1557013673/favicon/favicon.ico"
        />
        <meta name="application-name" content="Monocode App" />
        <meta name="msapplication-TileColor" content="#6700da" />
        <meta name="theme-color" content="#6700da" /> */}
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZP5NRH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <div className="website-background"></div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Main />
        <NextScript />
        {/* TIDIO - CHAT BOT */}
        <Script
          id="tidio-script"
          strategy="afterInteractive"
          src="//code.tidio.co/1wuhil6yeuojhxucewyyy0jaz2uqup5q.js"
          async
        />
      </body>
    </Html>
  );
}
