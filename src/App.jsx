// Library imports
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers (or routes)
import Rides from "./containers/Rides";

// Components
import Header from "./components/Header";
import NavigationControls from "./components/NavigationControls";
import BodyWrapper from "./HOC/BodyWrapper";

function App() {
  const [user, setUser] = useState({
    name: null,
    url: null,
    station_code: null,
  });
  const [allRides, setAllRides] = useState([]);
  const [nearestRides, setNearestRides] = useState({ data: [], count: 0 });
  const [upcomingRides, setUpcomingRides] = useState({ data: [], count: 0 });
  const [pastRides, setPastRides] = useState({ data: [], count: 0 });
  const [allStatesAndCities, setAllStatesAndCities] = useState({
    states: [],
    cities: [],
  });
  const [selectedFilter, setSelectedFilter] = useState({
    state: "choose",
    city: "choose",
  });

  useEffect(() => {
    // Fetching user details
    fetch("https://assessment.api.vweb.app/user").then(async (res) => {
      try {
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    });

    // Fetching rides
    fetch("https://assessment.api.vweb.app/rides").then(async (res) => {
      try {
        const data = await res.json();
        setAllRides(data);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  const initSetupRides = () => {
    // Handling nearest rides
    const userStationCode = user.station_code;
    const nearestRidesArr = allRides.filter((ride) =>
      ride.station_path.includes(userStationCode)
    );
    setNearestRides({ data: nearestRidesArr, count: nearestRidesArr.length });

    // Handling upcoming rides
    const currentTime = new Date().getTime();
    const upcomingRidesArr = allRides.filter((ride) => {
      const rideTime = new Date(ride.date).getTime();
      if (rideTime > currentTime) {
        return ride;
      }
    });
    setUpcomingRides({
      data: upcomingRidesArr,
      count: upcomingRidesArr.length,
    });

    // Handling past rides
    const pastRidesArr = allRides.filter((ride) => {
      const rideTime = new Date(ride.date).getTime();
      if (rideTime <= currentTime) {
        return ride;
      }
    });
    setPastRides({ data: pastRidesArr, count: pastRidesArr.length });

    // Handling all states and cities
    const allStates = allRides.map((ride) => ride.state);
    const allCities = allRides.map((ride) => ride.city);
    setAllStatesAndCities({ states: allStates, cities: allCities });
  };

  useEffect(() => initSetupRides(), [allRides, user]);

  useEffect(() => {
    let filteredNearest, filteredUpcoming, filteredPast;

    if (selectedFilter.state !== "choose") {
      const filteredNearestRidesByState = nearestRides.data.filter(
        (ride) => ride.state === selectedFilter.state
      );
      filteredNearest = [...filteredNearestRidesByState];

      const filteredUpcomingRidesByState = upcomingRides.data.filter(
        (ride) => ride.state === selectedFilter.state
      );
      filteredUpcoming = [...filteredUpcomingRidesByState];

      const filteredPastRidesByState = pastRides.data.filter(
        (ride) => ride.state === selectedFilter.state
      );
      filteredPast = [...filteredPastRidesByState];

      if (selectedFilter.city !== "choose") {
        const filteredNearestRidesByStateAndCity =
          filteredNearestRidesByState.filter(
            (ride) => ride.city === selectedFilter.city
          );
        filteredNearest = [...filteredNearestRidesByStateAndCity];

        const filteredUpcomingRidesByStateAndCity =
          filteredUpcomingRidesByState.filter(
            (ride) => ride.city === selectedFilter.city
          );
        filteredUpcoming = [...filteredUpcomingRidesByStateAndCity];

        const filteredPastRidesByStateAndCity = filteredPastRidesByState.filter(
          (ride) => ride.city === selectedFilter.city
        );
        filteredPast = filteredPastRidesByStateAndCity;
      }

      setNearestRides({ data: filteredNearest, count: filteredNearest.length });
      setUpcomingRides({
        data: filteredUpcoming,
        count: filteredUpcoming.length,
      });
      setPastRides({ data: filteredPast, count: filteredPast.length });
    } else if (
      selectedFilter.state === "choose" &&
      selectedFilter.city === "choose"
    ) {
      initSetupRides();
    }
  }, [selectedFilter]);

  return (
    <div className="App">
      <Header username={user.name} userImage={user.url} />
      <BodyWrapper>
        <NavigationControls
          upcomingRidesCount={upcomingRides.count}
          pastRidesCount={pastRides.count}
          allStatesAndCities={allStatesAndCities}
          filterHandler={setSelectedFilter}
        />
        <Routes>
          <Route index path="/" element={<Rides data={nearestRides.data} />} />
          <Route
            path="/upcoming-rides"
            element={<Rides data={upcomingRides.data} />}
          />
          <Route path="/past-rides" element={<Rides data={pastRides.data} />} />
        </Routes>
      </BodyWrapper>
    </div>
  );
}

export default App;
