import express from 'express'
import URLShortenerController from './controllers/URLShortenerController'
import URLShortenerRepositoryInMemory from './repositories/URLShortenerRepositoryInMemory'
import URLShortenerService from './services/URLShortenerService'

const repository = new URLShortenerRepositoryInMemory()
const service = new URLShortenerService(repository)
const controller = new URLShortenerController(service)

const app = express()
app.use(express.json())

app.post('/', (req, res) => controller.shorten(req, res))

app.get('/:shortenedURL', (req, res) => controller.get(req, res))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
