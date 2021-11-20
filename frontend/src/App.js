import './App.css';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewDepotPage from "./pages/NewDepotPage";
import EditDepotPage from "./pages/EditDepotPage";
import PlayPage from "./pages/PlayPage";
import HomePage from "./pages/HomePage";
import useDepots from "./hooks/useDepots";
import {CssBaseline, ThemeProvider} from "@mui/material";
import OpenDepotPage from "./pages/OpenDepotPage";
import {useState} from "react";
import Footer from "./components/Footer";
import theme from "./styling/theme";
import PortfolioItemDetailsPage from "./pages/PortfolioItemDetailsPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

function App() {

    const [token, setToken] = useState()
    const {depots} = useDepots(token)
    const [activeDepot, setActiveDepot] = useState()
    const [activePortfolioItem, setActivePortfolioItem] = useState({})

    console.log(token)

    const openDepot = (depot) => setActiveDepot(depot)
    const openPortfolioItem = (portfolioItem) => setActivePortfolioItem(portfolioItem)

    const login = (credentials) => {
        axios.post("auth/login", credentials)
            .then(response => response.data)
            .then(setToken)
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/login">
                            <LoginPage login={login}/>
                        </Route>
                        <Route path="/new">
                            <NewDepotPage token={token}/>
                        </Route>
                        <Route path="/edit">
                            <EditDepotPage/>
                        </Route>
                        <Route path="/open">
                            <OpenDepotPage depots={depots} openDepot={openDepot} token={token}/>
                        </Route>
                        <Route path="/play">
                            <PlayPage/>
                        </Route>
                        <Route path={"/details/:id"}>
                            <PortfolioItemDetailsPage activePortfolioItem={activePortfolioItem}/>
                        </Route>
                        <Route path="/">
                            <HomePage activeDepot={activeDepot} openPortfolioItem={openPortfolioItem}/>
                        </Route>
                    </Switch>
                    <Footer/>
                    <NavigationBar/>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
