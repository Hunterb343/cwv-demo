/*
  This file will run build time (or on the server) to generate the shell of the HTML.
  Things that should go here:
  * Analytic Script
  * 3rd Party Script Setup
  * CFX Header / Footer

  Next.Js Docs: https://nextjs.org/docs/advanced-features/custom-document
*/

import { Html, Head, Main, NextScript } from "next/document"
import {
  headerCoreAssetPreload,
  headerCoreCriticalCss,
  headerCoreDeferredCss,
  headerCoreDeferredJs,
  headerCoreHtmlPlaceholder,
} from "@carfax-frontend/global-header/lib/placeholders/jsx"
import { headerAuthDeferredJs } from "@carfax-frontend/global-header/lib/placeholders/jsx"
import {
  footerDeferredCss,
  footerDeferredJs,
  footerHtmlPlaceholder,
} from "@carfax-frontend/global-footer/lib/placeholders/jsx"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="prefetch" fetchpriority="high" href="https://thronesapi.com/assets/images/daenerys.jpg" />
        <link rel="preconnect" href="https://thronesapi.com" />
        <link rel="preconnect" href="https://api.thecatapi.com" />
        {headerCoreAssetPreload}
        <script src="https://accounts.google.com/gsi/client" defer></script>

        <script
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          type="text/javascript"
          data-domain-script="0d69d08b-8ee3-4551-ae64-1bbf1bc57831"
          defer
        ></script>

        <script
          src="https://code.jquery.com/jquery-3.7.1.js"
          integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
          crossOrigin="anonymous"
          defer
        ></script>

        {headerAuthDeferredJs}
        {headerCoreDeferredCss}
        {headerCoreDeferredJs}
        {footerDeferredCss}
        {footerDeferredJs}
      </Head>
      <body>
        {headerCoreCriticalCss}
        {headerCoreHtmlPlaceholder}
        <Main />
        {footerHtmlPlaceholder}
        <NextScript />
      </body>
    </Html>
  )
}
