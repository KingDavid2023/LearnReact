import { React, ReactDOM, html } from "./deps.js";
import App from "./App.js";

const rootElement = document.getElementById('root');

const AppContainer = () => {
  ReactDOM.render(
    html`<${App} />`,
    rootElement
  );
};

// Render the app
AppContainer();