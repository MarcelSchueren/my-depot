import {useEffect, useState} from "react";
import {addPortfolio, getDepots} from "../service/depot-api-service";

export default function useDepots() {
    const [depots, setDepots] = useState([])


    const addDepot = (newDepot) => {
        return addPortfolio(newDepot)
            .then(responseDepot => setDepots([...depots, responseDepot]))
            .catch(error => {console.error(error.message)})
    }

        useEffect(() => {
            let isMounted = true;
            getDepots()
                .then(result => {if(isMounted) setDepots(result)})
                .catch(error => console.error(error.message))
            return () => { isMounted = false };
        }, [])

    return {depots, addDepot}
}

