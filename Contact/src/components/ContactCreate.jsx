import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createContact } from "../actions";

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
    if (name === "" || phone === "") return;

    const contact = { name, phone };
    this.props.onCreate(contact);
    this.setState({
      name: "",
      phone: "",
    });

    this.nameInput.focus();
  };

  handleKeyPress = (e) => {
    // if(e.charCode === 13) { //  deprecated
    //   this.handleClick();
    // }

    if (e.key === "Enter") {
      this.handleClick();
    }
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
            ref={(ref) => {
              this.nameInput = ref;
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: ({ name, phone }) => dispatch(createContact(name, phone)),
  };
};

const mapStateToProps = (state) => {
  return state;
};

ContactCreate = connect(mapStateToProps, mapDispatchToProps)(ContactCreate);
