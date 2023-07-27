import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login.tsx'
import Dashboard from './dashboard.tsx'
import store from './store'
import { Provider } from 'react-redux'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";
const portalDiv = document.getElementById("root");
if (!portalDiv) {
  throw new Error("The element #portal wasn't found");
}
const root = ReactDOM.createRoot(portalDiv);

root.render(
  <Provider store = {store}>
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </Provider>
);
