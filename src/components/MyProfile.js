import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    description: "",
    read: "",
  };
  handlChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handlSumit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  };
  handlClick = (event) => {
    if (event.target.value === "") {
      this.setState({
        read: "checked",
      });
    } else {
      this.setState({
        read: "",
      });
    }
  };
  render() {
    return (
      <div className="content">
        <h1>My Profile</h1>
        <form onSubmit={this.handlSumit}>
          <label>
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Your name"
              name="name"
              onChange={this.handlChange}
              value={this.state.name}
            />
          </label>
          <label>
            <span>Gender</span>
            <br />
            <select
              name="gender"
              onChange={this.handlChange}
              value={this.state.gender}
            >
              <option name="gender" value="" />
              <option name="gender" value="male">
                Male
              </option>
              <option name="gender" value="female">
                Female
              </option>
            </select>
          </label>
          <label>
            <span>Description</span>
            <br />
            <textarea
              name="description"
              placeholder="Description about yourself"
              onChange={this.handlChange}
              value={this.state.description}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="read"
              onClick={this.handlClick}
              value={this.state.read}
              className="checkbox"
            />
            I have read the terms of conduct
          </label>

          <input
            type="submit"
            value="Submit"
            name="submit"
            className="submit"
            disabled={
              !this.state.name ||
              !this.state.gender ||
              !this.state.description ||
              !this.state.read
            }
          />
        </form>
      </div>
    );
  }
}

export default MyProfile;
