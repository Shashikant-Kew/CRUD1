import React from "react";
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.SelectedUser.name,
      age: props.SelectedUser.age,
      gender: props.SelectedUser.gender,
      city: props.SelectedUser.city,
      state: props.SelectedUser.state,
      country: props.SelectedUser.country
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //e.preventDefault();
  };

  handleupdate = e => {
    // console.log(this.props);
    const { name, age, gender, city, state, country } = this.state;
    const userobj = {
      name: name,
      age: age,
      gender: gender,
      city: city,
      state: state,
      country: country
    };

    this.props.updateuser(userobj);
    e.preventDefault();
  };

  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="per">
          <h4> Personal Information </h4>
          <lable>Enter Name:</lable>
          <input
            type="text"
            class="fields"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <lable>Enter Age:</lable>
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <lable>Enter gender:</lable>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="add">
          <h4>Address</h4>
          <lable>Enter City :</lable>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br />
          <lable>Enter State :</lable>
          <input
            type="text"
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <br />
          <lable>Enter Country:</lable>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <button
          type="update"
          onClick={this.handleupdate}
          name="update"
          className="update"
        >
          Update
        </button>
        <button type="reset" name="reset" className="reset">
          Reset
        </button>
      </form>
    );
  }
}
export default Update;
