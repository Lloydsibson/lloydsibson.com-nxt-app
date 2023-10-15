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
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        <Script id="vwoCode" strategy="beforeInteractive">
          {`window._vwo_code || (function() {
var account_id=781642,
version=2.0,
settings_tolerance=2000,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=this.getSettings(),n=d.createElement('script'),i=this;if(t){n.textContent=t;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);i.load(e)}}else{n.fetchPriority='high';n.src=e;n.type='text/javascript';n.onerror=function(){w._vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(n)}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){w._vwo_code.finish();stT.removeItem(cK)},e);var t=d.currentScript,n=d.createElement('style'),i=this.hide_element(),r=t&&!t.async&&i?i+this.hide_element_style():'',c=d.getElementsByTagName('head')[0];n.setAttribute('id','_vis_opt_path_hides');v&&n.setAttribute('nonce',v.nonce);n.setAttribute('type','text/css');if(n.styleSheet)n.styleSheet.cssText=r;else n.appendChild(d.createTextNode(r));c.appendChild(n);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version)}};w._vwo_code=code;code.init();})();(function(){var i=window;function t(){if(i._vwo_code){var e=t.hidingStyle=document.getElementById('_vis_opt_path_hides')||t.hidingStyle;if(!i._vwo_code.finished()&&!_vwo_code.libExecuted&&(!i.VWO||!VWO.dNR)){if(!document.getElementById('_vis_opt_path_hides')){document.getElementsByTagName('head')[0].appendChild(e)}requestAnimationFrame(t)}}}t()})();
`}
        </Script>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
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
          content="Developer at NEXT with over 5+ years commerical experience | Worked with 200+ brands such as Rolex, Nike, Gucci & Adidas | Founder of Monocode & UI Developer at Arclight Music."
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
          content="Developer at NEXT with over 5+ years commerical experience | Worked with 200+ brands such as Rolex, Nike, Gucci & Adidas | Founder of Monocode & UI Developer at Arclight Music."
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
        <meta name="theme-color" content="#6700da" />
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
