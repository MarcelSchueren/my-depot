import './App.css';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewDepotPage from "./pages/NewDepotPage";
import EditDepotPage from "./pages/EditDepotPage";
import PlayPage from "./pages/PlayPage";
import HomePage from "./pages/HomePage";
import useDepots from "./hooks/useDepots";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import OpenDepotPage from "./pages/OpenDepotPage";
import {useState} from "react";
import Footer from "./components/Footer";

function App() {

    const {depots, addDepot} = useDepots()
    const [activeDepot, setActiveDepot] = useState()

    const openDepot = (depot) => setActiveDepot(depot)


    const theme = createTheme({
        palette: {
            type: 'standard',
            primary: {
                main: '#3f51b5',
            },
            secondary: {
                main: '#f50057',
            },
        },
    })

    return (
        <div>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/new" >
                            <NewDepotPage addDepot={addDepot}/>
                        </Route>
                        <Route path="/edit">
                            <EditDepotPage/>
                        </Route>
                        <Route path="/open">
                            <OpenDepotPage depots={depots} openDepot={openDepot}/>
                        </Route>
                        <Route path="/play">
                            <PlayPage/>
                        </Route>
                        <Route path="/">
                            <HomePage activeDepot={activeDepot}/>
                        </Route>
                    </Switch>
                    <Footer/>
                    <NavigationBar/>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
