import React, { Component } from "react";
import "./title.css";

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Data",
      isInput: false
    };
  }

  editTitle() {
    this.setState({
      ...this.state,
      isInput: true
    });
  }

  changeInput(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  }
  changeTitle(event) {
    if (event.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false
      });
    }
  }
  blurHandler (event) {
      this.setState({
          ...this.state,
          isInput: false
      })
  }

  render() {
    let output = null;

    if (this.state.isInput) {
      output = (
        <div className="Title">
          <input
            className="form-control"
            onChange={event => this.changeInput(event)}
            onKeyPress={event => this.changeTitle(event)}
            onBlur = { event => this.blurHandler(event) }
            type="text"
            value={this.state.title}
          ></input>
        </div>
      );
    } else {
      output = (
        <div className="d-flex Title m-div">
          <h1 className="display-4"> {this.state.title} </h1>
          <span onClick={() => this.editTitle()} className="ml-auto edit-icon">
            <i className="fas fa-eye-slash"></i>
          </span>
        </div>
      );
    }
    return <div>{output}</div>;
  }
}

export default Title;
