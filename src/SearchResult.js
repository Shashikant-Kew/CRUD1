import React, { Component } from "react";

const SearchResult = props => (
  <div>
    <table class="searchtab">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
      </tr>
      {props.userlist.map(n => (
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
