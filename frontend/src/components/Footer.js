import useStyles from "../styling/useStyles";

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}/>
    )
}