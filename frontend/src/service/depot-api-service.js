import axios from 'axios'

const getHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
}

export const getDepots = (token) => {
    return axios.get('/portfolio', getHeader(token))
        .then(response => response.data)
}

export const getPortfolioItem = (symbol, token) => {
    return axios.get(`/portfolioItem/${symbol}`, getHeader(token))
        .then(response => response.data)
}

export const addPortfolio = (newPortfolio, token) => {
    return axios.post('/portfolio', newPortfolio, getHeader(token))
        .then(response => response.data)
}


