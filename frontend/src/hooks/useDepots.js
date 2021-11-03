import {useEffect, useState} from "react";
import {getDepots} from "../service/depot-api-service";


export default function useDepots() {
    const [depots, setDepots] = useState([])

        useEffect(() => {
            getDepots()
                .then(result => setDepots(result))
                .catch(error => console.error(error.message))
        }, [])

    return {depots}
}

