import {useEffect, useState} from "react";
import {getDepots} from "../service/depot-api-service";

export default function useDepots() {
    const [depots, setDepots] = useState([])

    const addDepot = (newDepot) => {
        setDepots([...depots, newDepot])
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

