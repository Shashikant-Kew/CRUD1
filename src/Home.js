import React from "react";
class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let [users] = this.props.userlist;
    console.log(users);
    if (this.props.userlist) {
      return (
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>U</th>
              <th>D</th>
            </tr>
            {this.props.userlist.map(n => (
              <tr>
                <td>{n.name}</td>
                <td>{n.age}</td>
                <td>{n.gender}</td>
                <td>{n.city}</td>
                <td>{n.state}</td>
                <td>{n.country}</td>
                <td>
                  <button name="update">Update</button>
                </td>
                <td>
                  <button name="delete">Delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      );
    } else {
      return <div>No Users</div>;
    }
  }
}
export default Home;
