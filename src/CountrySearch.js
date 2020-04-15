import React from "react";
import Select from "react-select";

const Country = [
  { label: "India", value: "India" },
  { label: "UK", value: "UK" }
];

class CountrySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value }, () => {
      this.props.SelectedCountry(this.state.selectedOption);
    });
  };

  render() {
    return (
      <div>
        <Select options={Country} onChange={this.handleChange} />
      </div>
    );
  }
}

export default CountrySearch;
