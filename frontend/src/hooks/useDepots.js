import {useEffect, useState} from "react";
import {addPortfolio, getDepots} from "../service/depot-api-service";

export default function useDepots(token) {
    const [depots, setDepots] = useState([])


    const addDepot = (newDepot) => {
        return addPortfolio(newDepot, token)
            .then(responseDepot => setDepots([...depots, responseDepot]))
            .catch(error => {console.error(error.message)})
    }

        useEffect(() => {
            // let isMounted = true;
            getDepots(token)
                .then(result => { setDepots(result)})           //if(isMounted)
                .catch(error => console.error(error.message))
            //return () => { isMounted = false };
        }, [token])

    return {depots, addDepot}
}

