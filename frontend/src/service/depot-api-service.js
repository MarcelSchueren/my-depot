import axios from 'axios'

export const getDepots = () => {
    return axios.get('/portfolio')
        .then(response => response.data)
}


