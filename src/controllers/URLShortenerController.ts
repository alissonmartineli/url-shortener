import { Request, Response } from 'express'
import URLShortenerService from '../services/URLShortenerService'
import constants from '../configs/constants'

class URLShortenerController {
  private service: URLShortenerService

  constructor(service: URLShortenerService) {
    this.service = service
  }

  async shorten(req: Request<{}, {}, { url: string }>, res: Response) {
    const url = req.body.url
    const shortenedURL = await this.service.shorten(url)
    res.json({ url: url, shortenedURL: `${constants.API_URL}/${shortenedURL}` })
  }

  async get(req: Request<{ shortenedURL: string }>, res: Response) {
    const shortenedURL = req.params.shortenedURL
    const url = await this.service.get(shortenedURL)
    if (url) {
      res.redirect(url.url)
    } else {
      res.status(404).send()
    }
  }
}

export default URLShortenerController
