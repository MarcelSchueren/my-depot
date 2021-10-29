import './App.css';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewDepotPage from "./pages/NewDepotPage";
import EditDepotPage from "./pages/EditDepotPage";
import PlayPage from "./pages/PlayPage";
import HomePage from "./pages/HomePage";
import useStocks from "./hooks/useStocks";
import SwitchDepotPage from "./pages/SwitchDepotPage";
import {CssBaseline} from "@mui/material";

function App() {
    const {stocks} = useStocks()
    return (
        <div>
            <Router>
                <CssBaseline/>
                <Header/>
                <NavigationBar/>
                <Switch>
                    <Route path="/new">
                        <NewDepotPage/>
                    </Route>
                    <Route path="/edit">
                        <EditDepotPage/>
                    </Route>
                    <Route path="/switch">
                        <SwitchDepotPage/>
                    </Route>
                    <Route path="/play">
                        <PlayPage/>
                    </Route>
                    <Route path="/">
                        {stocks && <HomePage stocks={stocks}/>}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
