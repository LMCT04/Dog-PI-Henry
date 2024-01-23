import { Home, Landing, Detail, Form } from "./views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/navBar";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {location.pathname !== "/" && <NavBar />}
            <Routes>
                <Route exact path="/" component={Landing} />
                <Route path="/home" component={Home} />
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/form" component={Form} />
            </Routes>
        </div>
    );
}

export default App;
