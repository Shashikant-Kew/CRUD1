import React from "react";
import Select from "react-select";

const States = [
  { label: "Maharashtra", value: MAHARASHTRA },
  { label: "Delhi", value: DELHI },
  { label: "Tamilnadu", value: CHENNAI },
  { label: "WestBengal", value: WESTBENGAL },
  { label: "Telangana", value: TELANGANA }
];

const StateSearch = () => (
  <div>
    <Select options={States} />
  </div>
);

export default StateSearch;
