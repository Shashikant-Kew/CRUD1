import React from "react";
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      gender: "",
      city: "",
      state: "",
      country: "",
      updateflag: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //e.preventDefault();
  };

  handleSubmit = e => {
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
    //console.log(userobj);
    this.props.addtolist(userobj);
    e.preventDefault();
  };

  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="per">
          <div>
            <h4> Personal Information </h4>
            <table class="pertab">
              <tr>
                <td>
                  <lable>Enter Name:</lable>
                </td>
                <td>
                  <input
                    type="text"
                    class="fields"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <lable>Enter Age:</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <lable>Enter Gender:</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <div className="add">
          <div>
            <h4>Address Details</h4>
            <table class="addtab">
              <tr>
                <td>
                  <lable>Enter City :</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <lable>Enter State :</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="state"
                    value={this.state.state}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <lable>Enter Country:</lable>
                </td>
                <td>
                  <input
                    type="text"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <button type="submit" name="submit" className="submit">
          Submit
        </button>
        <button type="reset" name="reset" className="reset">
          Reset
        </button>
      </form>
    );
  }
}
export default Create;
