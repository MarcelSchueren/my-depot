import './App.css';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewDepotPage from "./pages/NewDepotPage";
import EditDepotPage from "./pages/EditDepotPage";
import PlayPage from "./pages/PlayPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>
            <Router>
            <Header/>
            <NavigationBar/>
                <Switch>
                    <Route path="/new">
                        <NewDepotPage />
                    </Route>
                    <Route path="/edit">
                        <EditDepotPage />
                    </Route>
                    <Route path="/play">
                        <PlayPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
