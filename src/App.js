import React from "react";
// import logo from './logo.svg';
// import './App.css';

// export function Form() {
//   return <h1>Hello</h1>;
// }

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", textValue: "Please leave your feedback here." };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ textValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <textarea
          value={this.state.textValue}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
