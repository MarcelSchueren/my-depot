import './App.css';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {Route, Switch} from "react-router-dom";
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

function App() {

    const {depots} = useDepots()
    const [activeDepot, setActiveDepot] = useState()
    const [activePortfolioItem, setActivePortfolioItem] = useState({})

    const openDepot = (depot) => setActiveDepot(depot)
    const openPortfolioItem = (portfolioItem) => setActivePortfolioItem(portfolioItem)

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <Header/>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/new">
                        <NewDepotPage />
                    </Route>
                    <Route path="/edit">
                        <EditDepotPage/>
                    </Route>
                    <Route path="/open">
                        <OpenDepotPage depots={depots} openDepot={openDepot} />
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
            </div>
        </ThemeProvider>
    );
}

export default App;
