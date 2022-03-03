import React from "react";
import "./filter.scss";

const Filter = (props) => {
  const filterHandler = props.filterHandler;

  return (
    <div className="filter">
      <h3 className="filter--heading">Filters</h3>
      <div className="filter--select-group">
        <select
          className="filter--dropdown"
          onChange={(event) => {
            filterHandler((prev) => ({
              state: event.target.value,
              city: prev.city,
            }));
          }}
        >
          <option className="filter--option" value="choose">
            State
          </option>

          {props.data.states.map((state, idx) => (
            <option key={idx} className="filter--option" value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          className="filter--dropdown"
          onChange={(event) => {
            filterHandler((prev) => ({
              state: prev.state,
              city: event.target.value,
            }));
          }}
        >
          <option className="filter--option" value="choose">
            City
          </option>

          {props.data.cities.map((city, idx) => (
            <option key={idx} className="filter--option" value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Filter;
