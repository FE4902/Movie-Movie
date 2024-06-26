import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/tv">
                    <Tv />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
