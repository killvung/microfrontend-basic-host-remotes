import axios from 'axios'
import { GOOGLE_API_KEY } from '../../key.json'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: GOOGLE_API_KEY
  }
})
