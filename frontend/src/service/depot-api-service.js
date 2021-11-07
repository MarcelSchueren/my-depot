import axios from 'axios'

export const getDepots = () => {
    return axios.get('/portfolio')
        .then(response => response.data)
}

export const getPortfolioItem = (symbol) => {
    return axios.get(`/portfolioItem/${symbol}`)
        .then(response => response.data)
}


