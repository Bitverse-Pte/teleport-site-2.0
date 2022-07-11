import { NextApiResponse, NextApiRequest } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'ok' })
}

export default handler
