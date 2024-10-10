import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "primeflex/primeflex.css"; // PrimeFlex CSS
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact Theme
import "primereact/resources/primereact.min.css"; // PrimeReact core CSS
import "./index.css"; // Your custom styles

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
