import React, { useState } from "react";
import countries from "./countries";

const App = () => {
  const [country, setCountry] = useState(-1);
  const handleCountryChange = (e) => {
    let countrySelected = e.target.value;
    setCountry(countrySelected);
    console.log(countrySelected);
  };
  return (
    <div style={{ padding: "20px" }}>
      <select className="form-select" onChange={handleCountryChange}>
        {countries.map((_country, index) => (
          <option key={_country.name} value={index}>
            {_country.name}
          </option>
        ))}
      </select>
      <select className="form-select" style={{ marginTop: "24px" }}>
        {countries[country]?.cities.map((_country) => (
          <option>{_country}</option>
        ))}
      </select>
    </div>
  );
};

export default App;
