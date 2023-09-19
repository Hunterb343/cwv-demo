/*



  Next.Js Docs: https://nextjs.org/docs/advanced-features/custom-app
*/
import "../styles/_global.scss"

import type { AppProps } from "next/app"

function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default NextApp
