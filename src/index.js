import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import "react-datepicker/dist/react-datepicker.css"
import 'react-flags-select/css/react-flags-select.css';
//import "./../node_modules/react-datepicker/src/stylesheets/"
ReactDOM.render(<App />, document.getElementById("root"));
var module;
if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();
