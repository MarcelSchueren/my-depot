import { NavLink } from 'react-router-dom'
import styled from "styled-components/macro";
export default function NavigationBar(){

    return (
        <Wrapper>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/new">New Depot</NavLink>
            <NavLink to="/edit">Edit Depot</NavLink>
            <NavLink to="/switch">Switch Depot</NavLink>
            <NavLink to="/play">Play</NavLink>
        </Wrapper>
    )

}

const Wrapper = styled.div`
 background-color: lightgrey;
`