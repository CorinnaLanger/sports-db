import React from "react";
import Filterdropdown from "./Filterdropdown";
import "./Filter.scss";
// Zustand
import useFilterStore from "../../Stores/useFilterStore";

const Filter = () => {
  const {
    filteredCountries,
    filteredSports,
    removeFilteredCountry,
    removeFilteredSport,
  } = useFilterStore((state) => ({
    filteredCountries: state.filteredCountries,
    filteredSports: state.filteredSports,
    removeFilteredCountry: state.removeFilteredCountry,
    removeFilteredSport: state.removeFilteredSport,
  }));

  return (
    <div className="filterbar">
      <div className="items">
        <div className="countries-items">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((item, index) => {
              return (
                <div className="filteritem">
                  <button
                    value={item}
                    onClick={(e) => {
                      removeFilteredCountry(e.target.value);
                    }}
                  >
                    X
                  </button>
                  <p key={index}>{item}</p>
                </div>
              );
            })
          ) : (
            <p>Leer!</p>
          )}
        </div>
        <div className="sports-items">
          {filteredSports.length > 0 ? (
            filteredSports.map((item, index) => {
              return (
                <div className="filteritem">
                  <button
                    value={item}
                    onClick={(e) => {
                      removeFilteredSport(e.target.value);
                    }}
                  >
                    X
                  </button>
                  <p key={index}>{item}</p>
                </div>
              );
            })
          ) : (
            <p>Leer!</p>
          )}
        </div>
      </div>
      <Filterdropdown className="filterdropdown" />
    </div>
  );
};

export default Filter;
