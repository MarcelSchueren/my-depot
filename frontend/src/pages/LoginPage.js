import useStyles from "../styling/useStyles";
import {Box, Button, Container, TextField} from "@mui/material";
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
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className={classes.loginContainer}
                onSubmit={handleSubmit}
            >

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
                           margin="normal"
                           onChange={handleChange}/>
                <Button type="submit" variant="contained" >Login</Button>
            </Box>
        </div>
    )
}