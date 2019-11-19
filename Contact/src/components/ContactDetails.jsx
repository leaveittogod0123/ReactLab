import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleToggle = () => {
    if (!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone,
      });
    } else {
      this.handleEdit();
    }

    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  handleEdit = () => {
    this.props.onEdit(this.state.name, this.state.phone);
  };

  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    const edit = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );

    const view = this.state.isEdit ? edit : details;

    const blank = <div>NotSelected</div>;
    return (
      <div>
        <h1>Selected Contact</h1>
        <div>{this.props.isSelected ? view : blank}</div>
        <button type="button" onClick={this.handleToggle}>
          {this.state.isEdit ? "OK" : "Edit"}
        </button>
        <button type="button" onClick={this.props.onRemove}>
          Remove
        </button>
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {},
  isSelected: false,
  onRemove: () => {},
  onEdit: () => {},
};

ContactDetails.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
  isSelected: PropTypes.bool,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};
