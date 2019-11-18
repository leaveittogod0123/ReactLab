import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactDetails extends Component {
  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = <div>NotSelected</div>;
    return (
      <div>
        <h1>Selected Contact</h1>
        <div>{this.props.isSelected ? details : blank}</div>
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {},
  isSelected: false,
};

ContactDetails.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
  isSelected: PropTypes.bool,
};
