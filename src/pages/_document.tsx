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
