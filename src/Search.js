import React from "react";
import CitySearch from "./CitySearch";
import StateSearch from "./StateSearch";
import CountrySearch from "./CountrySearch";
import SearchResult from "./SearchResult";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Selectcity: null,
      Selectstate: null,
      Selectcountry: null
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
    //console.log("sdfs");
    this.setState({ Selectcity });
  };

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
            userlist={this.props.userlist}
          />
        </div>
      </div>
    );
  }
}
export default Search;
