import axios from 'axios'

export const getDepots = () => {
    return axios.get('/portfolios')
        .then(response => response.data)
}


