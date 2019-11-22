import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default class ContactInfo extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} onKeyDown={this.props.onKeyDown}>
        {this.props.contact.name}
      </div>
    );
  }
}

ContactInfo.defaultProps = {
  contact: {},
  onClick: () => {},
  onKeyDown: () => {},
};

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state;
};
ContactInfo = connect(mapStateToProps)(ContactInfo);
