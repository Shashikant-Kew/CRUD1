import React, { Component } from "react";

const SearchResult = ({ Selectcity, Selectstate, Selectcountry }) => (
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
      </tr>
      {this.props.userlist.map(n => (
        <tr>
          <td>{n.name}</td>
          <td>{n.age}</td>
          <td>{n.gender}</td>
          <td>{n.city}</td>
          <td>{n.state}</td>
          <td>{n.country}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default SearchResult;
