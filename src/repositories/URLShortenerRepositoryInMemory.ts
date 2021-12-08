import URL from '../entities/URL'
import IURLRepository from '../services/IURLRepository'

class URLShortenerRepositoryInMemory implements IURLRepository {
  private urls: URL[] = []

  public async get(shortenedURL: string): Promise<URL | undefined> {
    return new Promise((resolve) => {
      resolve(this.urls.find((url) => url.shortenedURL === shortenedURL))
    })
  }

  public async create(
    originalURL: string,
    shortenedURL: string
  ): Promise<void> {
    return new Promise((resolve) => {
      this.urls.push(new URL(originalURL, shortenedURL))
      resolve()
    })
  }
}

export default URLShortenerRepositoryInMemory
