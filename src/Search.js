import React from "react";
import CitySearch from "./CitySearch";
import StateSearch from "./StateSearch";
import CountrySearch from "./CountrySearch";

class Search extends React.Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
        <table>
          <tr>
            <th>City</th>
            <td>
              <CitySearch />
            </td>
          </tr>
          <tr>
            <th>State</th>
            <td>
              <StateSearch />
            </td>
          </tr>
          <tr>
            <th>Country</th>
            <td>
              <CountrySearch />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Search;
