import axios from 'axios'

export default axios.create({
  baseURL: 'https://dev.foodsaving.world',
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN'
})
