import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost/backendXdr',
  headers: {
    'Content-Type': 'Application/json'
  }
})
