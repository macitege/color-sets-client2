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

export const getPalettes = (token) => {
  return axios({
    url: apiUrl + '/colors',
    method: 'get',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}
