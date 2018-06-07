import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';


import { render } from "react-dom";
import Demo from "./demo";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
