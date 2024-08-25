import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {
  CategoryProvider,
  DataProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  HotelProvider,
  AlertProvider
} from "./context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <DataProvider>
          <FilterProvider>
            <AuthProvider>
             <WishlistProvider>
             <HotelProvider>
              <AlertProvider>
              <App/>
              </AlertProvider>
             
             </HotelProvider>
              
             </WishlistProvider>
            </AuthProvider>
          </FilterProvider>
        </DataProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
