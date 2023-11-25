import DataFilteringComponent from "./DataFilteringComponent";
import React from "react";
const data = [
  {
    first_name: "Meier",
    last_name: "Challes",
    email: "mchalles0@nature.com",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Alejandro Velasco Astete International Airport",
  },
  {
    first_name: "Arman",
    last_name: "Sheryn",
    email: "asheryn1@ucoz.ru",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Valdez Pioneer Field",
  },
  {
    first_name: "Margret",
    last_name: "Bolding",
    email: "mbolding2@networkadvertising.org",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Okondja Airport",
  },
  {
    first_name: "Arlen",
    last_name: "Peeter",
    email: "apeeter3@jimdo.com",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Mallacoota Airport",
  },
  {
    first_name: "Allayne",
    last_name: "Maric",
    email: "amaric4@utexas.edu",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Krasnoselkup Airport",
  },
  {
    first_name: "Ruby",
    last_name: "Hooks",
    email: "rhooks5@cocolog-nifty.com",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Maria Montez International Airport",
  },
  {
    first_name: "Tony",
    last_name: "Davioud",
    email: "tdavioud6@techcrunch.com",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Galway Airport",
  },
  {
    first_name: "Joline",
    last_name: "Gonsalo",
    email: "jgonsalo7@ihg.com",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Las Vegas Municipal Airport",
  },
  {
    first_name: "Shelly",
    last_name: "Frend",
    email: "sfrend8@psu.edu",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Maiduguri International Airport",
  },
  {
    first_name: "Merill",
    last_name: "Montgomery",
    email: "mmontgomery9@globo.com",
    state: "Champagne-Ardenne",
    city: "Delhi",
    place: "Marau Airport",
  },
];

const App = () => {
  return (
    <div>
      <h1>Data Filtering App</h1>
      <DataFilteringComponent data={data} />
    </div>
  );
};

export default App;
