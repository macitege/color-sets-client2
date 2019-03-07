import axios from 'axios'
import apiUrl from '../apiConfig'

export const createPalette = (data, token) => {
  return axios({
    url: apiUrl + '/colors',
    method: 'post',
    headers: {
      Authorization: 'Token token=' + token
    },
    data: data
  })
}
