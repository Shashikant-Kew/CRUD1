import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Create from "./Create";
import Search from "./Search";
import Home from "./Home";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.addtolist = this.addtolist.bind(this);
    this.updateuser = this.updateuser.bind(this);
    this.deleteuser = this.deleteuser.bind(this);
  }

  addtolist = (userobj, e) => {
    let a = [...this.state.users];
    a.push(userobj);
    this.setState({ users: a });
    //console.log(this.state.users);
    //e.preventDefault();
  };

  updateuser = upuser => {
    let a = [...this.state.users];
    let ind = a.findIndex(i => i.name === upuser.name);
    a[ind] = upuser;
    this.setState({ users: a });
    console.log("index", ind);
  };

  deleteuser = user => {
    let a = [...this.state.users];
    let ind = a.findIndex(i => i.name === user.name);

    a.splice(ind, 1);
    console.log("Deleted");
    this.setState({ users: a });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <h1>User CRUD Assignment</h1>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path="/home"
              render={routeProps => (
                <Home
                  {...routeProps}
                  userlist={this.state.users}
                  updateuser={this.updateuser}
                  deleteuser={this.deleteuser}
                />
              )}
            />
            <Route
              path="/create"
              render={routeProps => (
                <Create {...routeProps} addtolist={this.addtolist} />
              )}
            />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
