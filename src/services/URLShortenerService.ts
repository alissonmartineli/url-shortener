import URL from '../entities/URL'
import IURLRepository from './IURLRepository'

class URLShortenerService {
  private repository: IURLRepository

  constructor(repository: IURLRepository) {
    this.repository = repository
  }

  async shorten(url: string): Promise<string> {
    const shortenedURL = Math.random().toString(36).substr(2, 5)
    await this.repository.create(url, shortenedURL)
    return shortenedURL
  }

  async get(shortenedURL: string): Promise<URL | undefined> {
    return await this.repository.get(shortenedURL)
  }
}

export default URLShortenerService
