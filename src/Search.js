import React from "react";
import CitySearch from "./CitySearch";
import StateSearch from "./StateSearch";
import CountrySearch from "./CountrySearch";
import SearchResult from "./SearchResult";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Selectcity: "",
      Selectstate: "",
      Selectcountry: "",
      updateduserlist: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  SelectedCountry = Selectcountry => {
    this.setState({ Selectcountry });
  };

  SelectedState = Selectstate => {
    this.setState({ Selectstate });
  };

  SelectedCity = Selectcity => {
    this.setState({ Selectcity });
  };

  componentDidMount() {
    const updatedusers = this.props.userlist.filter(
      a =>
        a.city == this.state.SelectedCity ||
        a.state == this.state.SelectedState ||
        a.country == this.state.SelectedCountry
    );
    console.log(updatedusers);
    this.setState({ updateduserlist: updatedusers });
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <table>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>
              <CitySearch SelectedCity={this.SelectedCity} />
            </td>

            <td>
              <StateSearch SelectedState={this.SelectedState} />
            </td>

            <td>
              <CountrySearch SelectedCountry={this.SelectedCountry} />
            </td>
          </tr>
        </table>
        <div>
          <h2>Search Result</h2>
          <SearchResult
            Selectcity={this.state.Selectcity}
            Selectstate={this.state.Selectstate}
            Selectcountry={this.state.Selectcountry}
            userlist={this.state.updateduserlist}
          />
        </div>
      </div>
    );
  }
}
export default Search;
