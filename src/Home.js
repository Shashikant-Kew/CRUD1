import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.userlist);
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
export default Home;
