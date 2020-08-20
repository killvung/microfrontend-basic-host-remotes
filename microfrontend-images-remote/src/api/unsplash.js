import axios from 'axios'
import { UNSPLASH_API_KEY } from '../../key.json'

const BASE_URL = 'https://api.unsplash.com';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Client-ID ' + UNSPLASH_API_KEY
  }
})
