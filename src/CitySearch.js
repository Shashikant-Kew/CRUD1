import React from "react";
import Select from "react-select";

const City = [
  { label: "Mumbai", value: Mumbai },
  { label: "Delhi", value: Delhi },
  { label: "Chennai", value: Chennai },
  { label: "Kolkata", value: Kolkata },
  { label: "Pune", value: Pune },
  { label: "Hyderabad", value: Hyderabad }
];

const CitySearch = () => (
  <div>
    <Select options={City} />
  </div>
);

export default CitySearch;
