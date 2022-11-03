
import * as React from "react";
import * as ReactDOM from"react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Mycomponent from "./Mycomponent.js";

const root =ReactDOM.createRoot (document.getElementById("root"));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Mycomponent />}/>
        </Routes>
    </Router>
)
