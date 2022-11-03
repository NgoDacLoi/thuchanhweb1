
import * as React from "react";
import * as ReactDOM from"react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root =ReactDOM.createRoot (document.getElementById("root"));

root.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

