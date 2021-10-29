import { NavLink } from 'react-router-dom'
export default function NavigationBar(){

    return (
        <div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/new">New Depot</NavLink>
            <NavLink to="/edit">Edit Depot</NavLink>
            <NavLink to="/switch">Switch Depot</NavLink>
            <NavLink to="/play">Play</NavLink>
        </div>
    )
}

