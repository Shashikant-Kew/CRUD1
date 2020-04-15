import React from "react";
import Select from "react-select";

const Country = [{ label: "India", value: INDIA }, { label: "UK", value: UK }];

const CountrySearch = () => (
  <div>
    <Select options={Country} />
  </div>
);

export default CountrySearch;
