/*
  Only use pages/api using an Server Side Rendered (SSR) Next.js App.
  Static Site Generated (SSG) apps will not leverage this folder (however you can still use pages/api for mock endpoints in dev mode)

  We have set this app up to favor SSG as most teams will likely Jam Stack to s3, but it will not take much effort to pivot to SSR.

  Next.js Docs: https://nextjs.org/docs/api-routes/introduction
*/
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "Hello World!" })
}
