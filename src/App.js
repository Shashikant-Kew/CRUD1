import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Create from "./Create";
import Search from "./Search";
import Home from "./Home";
import "../public/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.addtolist = this.addtolist.bind(this);
  }

  addtolist = userobj => {
    this.setState({ users: this.users.concat(userobj) }, () =>
      console.log(this.state.users, "addyolist")
    );
    //e.preventDefault();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <h1>User CRUD Assignment</h1>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
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
