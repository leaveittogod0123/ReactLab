import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleClick = () => {
    const { name, phone } = this.state;
    const contact = { name, phone }; //Object Property Value Shorthand
    this.props.onCreate(contact);
    this.setState({
      name: "",
      phone: "",
    });
  };

  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <button type="button" onClick={this.handleClick}>
          Create
        </button>
      </div>
    );
  }
}

ContactCreate.defaultProps = {
  onCreate: () => {},
};

ContactCreate.propTypes = {
  onCreate: PropTypes.func,
};
