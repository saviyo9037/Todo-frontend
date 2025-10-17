import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import './index.css';
import { Provider } from "react-redux";
import Store from "./store/Store";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <App />
      </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
