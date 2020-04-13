import React from "react";
import Update from "./Update";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateflag: false,
      selecteduser: ""
    };
  }

  handleupdate = n => {
    console.log(n);
    this.setState({ updateflag: true, selecteduser: n });
  };

  render() {
    if (this.state.updateflag) {
      return (
        <Update
          SelectedUser={this.state.selecteduser}
          updateuser={this.props.updateuser}
        />
      );
    }
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
                  <button name="update" onClick={() => this.handleupdate(n)}>
                    Update
                  </button>
                </td>
                <td>
                  <button
                    name="delete"
                    onClick={() => this.props.deleteuser(n)}
                  >
                    Delete
                  </button>
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
