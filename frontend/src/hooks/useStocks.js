import {useEffect, useState} from "react";
import {getStocks} from "../service/depot-api-service";


export default function useStocks() {
    const [stocks, setStocks] = useState([])

        useEffect(() => {
            getStocks()
                .then(stocks => setStocks(stocks))
                .catch(error => console.error(error.message))
        }, [])

    return {stocks}
}

