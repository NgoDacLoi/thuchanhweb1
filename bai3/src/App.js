import * as React from "react";
import * as ReactDOM from"react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Mycomponent from "./Mycomponent";


function App() {
        const [MyComponent,setMycomponent]= React.useState(()=> ()=> null);
        React.useEffect(()=> {
            import("./Mycomponent").then((module)=> {
                setMycomponent(()=> module.default);
            })
        }, []);
    return<MyComponent/>;
  
}

export default App;
