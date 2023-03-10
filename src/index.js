import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CursorProvider from "./context/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CursorProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </CursorProvider>
);
