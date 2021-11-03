import './App.css';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewDepotPage from "./pages/NewDepotPage";
import EditDepotPage from "./pages/EditDepotPage";
import PlayPage from "./pages/PlayPage";
import HomePage from "./pages/HomePage";
import useDepots from "./hooks/useDepots";
import {CssBaseline} from "@mui/material";
import OpenDepotPage from "./pages/OpenDepotPage";
import {useState} from "react";

function App() {
    const {depots} = useDepots()
    const [activeDepot, setActiveDepot] = useState()

    const openDepot = (depot)=>setActiveDepot(depot)

    return (
        <div>
            <Router>
                <CssBaseline/>
                <Header/>
                <Switch>
                    <Route path="/new">
                        <NewDepotPage/>
                    </Route>
                    <Route path="/edit">
                        <EditDepotPage/>
                    </Route>
                    <Route path="/open">
                        {depots && <OpenDepotPage depots={depots} openDepot={openDepot}/>}
                    </Route>
                    <Route path="/play">
                        <PlayPage/>
                    </Route>
                    <Route path="/">
                        {activeDepot && <HomePage activeDepot={activeDepot}/>}
                    </Route>
                </Switch>
                <NavigationBar/>
            </Router>
        </div>
    );
}

export default App;
