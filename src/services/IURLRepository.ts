import URL from '../entities/URL'

interface IURLRepository {
  get(shortenedURL: string): Promise<URL | undefined>

  create(originalURL: string, shortenedURL: string): Promise<void>
}

export default IURLRepository
