import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/'
})

//instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance