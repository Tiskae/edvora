// Library imports
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers (or routes)
import NearestRides from "./containers/NearestRides";
import UpcomingRides from "./containers/UpcomingRides";
import PastRides from "./containers/PastRides";

// Components
import Header from "./components/Header";
import NavigationControls from "./components/NavigationControls";
import Filter from "./components/Filter";
import Ride from "./components/Ride";
import BodyWrapper from "./HOC/BodyWrapper";
function App() {
  return (
    <div className="App">
      <Header />
      <BodyWrapper>
        <NavigationControls />
        {/* <Filter /> */}
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<NearestRides />} />
            <Route path="upcoming-rides" element={<UpcomingRides />} />
            <Route path="past-rides" element={<PastRides />} />
          </Routes>
        </BrowserRouter>
      </BodyWrapper>
    </div>
  );
}

export default App;
