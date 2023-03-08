import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
const el = document.getElementById("root");
const root = createRoot(el);
root.render(<App tab="home" />);
// ReactDOM.render(<App />, el);


