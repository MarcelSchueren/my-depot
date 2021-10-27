import axios from 'axios'

export const getStocks = () => {
    return axios.get('/stocks')
        .then(response => response.data)
}


