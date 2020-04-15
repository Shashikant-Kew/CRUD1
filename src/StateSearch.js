import React from "react";
import Select from "react-select";

const States = [
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Delhi", value: "Delhi" },
  { label: "Tamilnadu", value: "Chennai" },
  { label: "WestBengal", value: "WestBengal" },
  { label: "Telangana", value: "Telangana" }
];

class StateSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value }, () => {
      this.props.SelectedState(this.state.selectedOption);
    });
  };

  render() {
    return (
      <div>
        <Select options={States} onChange={this.handleChange} />
      </div>
    );
  }
}
export default StateSearch;
