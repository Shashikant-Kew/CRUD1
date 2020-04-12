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
  }

  addtolist = (userobj, e) => {
    let a = [...this.state.users];
    a.push(userobj);
    this.setState({ users: a }); 
    //console.log(this.state.users);
    //e.preventDefault();
  };

  updateuser = updateuser => {
    console.log(typeof updateuser.name);
    let a = [...this.state.users];
    a.map((i, updateuser) => {
      if (i.name == updateuser.name) {
      } else {
      }
      console.log(typeof i.name);
    });
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
