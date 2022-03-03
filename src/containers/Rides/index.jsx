import React from "react";
import Ride from "../../components/Ride";
import Fallback from "../../components/Fallback";

const Rides = (props) => {
  if (props.data.length === 0) return <Fallback />;

  return (
    <div style={{ overflow: "scroll" }}>
      {props.data.map((ride, idx) => (
        <Ride
          key={idx}
          imgUrl={ride.map_url}
          id={ride.id}
          originStation={ride.origin_station_code}
          stationPath={ride.station_path}
          destinationStationCode={ride.destination_station_code}
          date={ride.date}
          city={ride.city}
          state={ride.state}
          distance={0}
        />
      ))}
    </div>
  );
};

export default Rides;
