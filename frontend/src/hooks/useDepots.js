import {useEffect, useState} from "react";
import {addPortfolio, getDepots} from "../service/depot-api-service";
import {useHistory} from "react-router-dom";

export default function useDepots(token) {
    const [depots, setDepots] = useState([])
    const history = useHistory()


    const addDepot = (newDepot) => {
        return addPortfolio(newDepot, token)
            .then(responseDepot => setDepots([...depots, responseDepot]))
            .catch(error => {console.error(error.message)})
    }

        useEffect(() => {
            // let isMounted = true;
            if (token!== undefined) {
            getDepots(token)
                .then(result => { setDepots(result)})           //if(isMounted)
                .catch(error => console.error(error.message))
            //return () => { isMounted = false };
        } else {
                history.push('/login')
            }
            }, [token, history])

    return {depots, addDepot}
}

