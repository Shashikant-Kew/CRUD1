import React from "react";
import Select from "react-select";

const City = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Delhi", value: "Delhi" },
  { label: "Chennai", value: "Chennai" },
  { label: "Kolkata", value: "Kolkata" },
  { label: "Pune", value: "Pune" },
  { label: "Hyderabad", value: "Hyderabad" }
];

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value }, () => {
      this.props.SelectedCity(this.state.selectedOption);
    });
  };

  render() {
    return (
      <div>
        <Select options={City} onChange={this.handleChange} />
      </div>
    );
  }
}
export default CitySearch;
