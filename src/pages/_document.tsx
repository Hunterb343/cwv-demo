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
        {headerCoreAssetPreload}
        {/* ANALYTIC / MARKETING SCRIPTS GO HERE */}
        <script src="https://accounts.google.com/gsi/client"></script>

        <script
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          type="text/javascript"
          data-domain-script="0d69d08b-8ee3-4551-ae64-1bbf1bc57831"
        ></script>

        <script
          src="https://code.jquery.com/jquery-3.7.1.js"
          integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
          crossOrigin="anonymous"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

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
