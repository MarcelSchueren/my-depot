import useStyles from "../styling/useStyles";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

const initialState = {
    username: "",
    password: ""
}

export default function LoginPage({login}) {

    const classes = useStyles()
    const [credentials, setCredentials] = useState(initialState)

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(credentials)
    }

    return (
        <div className={classes.page}>
            <form onSubmit={handleSubmit}>
                <TextField type="text"
                           name="username"
                           required
                           label="Username"
                           value={credentials.username}
                           onChange={handleChange}/>

                <TextField type="password"
                           name="password"
                           required
                           label="Password"
                           value={credentials.password}
                           onChange={handleChange}/>
                <Button onClick={handleSubmit}>Login</Button>
            </form>
        </div>
    )
}