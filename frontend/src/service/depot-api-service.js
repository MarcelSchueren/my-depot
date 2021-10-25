import axios from 'axios'

export const getItems = () => {
    return axios.get('/').then(response => response.data)
}