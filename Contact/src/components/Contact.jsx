import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";
import ContactCreate from "./ContactCreate";
import { selectContact } from "../actions";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };

    // const { contactData } = localStorage;

    // if (contactData) {
    //   this.state = {
    //     ...this.state,
    //     contactData: JSON.parse(contactData),
    //   };
    // }
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     JSON.stringify(prevState.contactData) !==
  //     JSON.stringify(this.props.contactData)
  //   ) {
  //     localStorage.contactData = JSON.stringify(this.props.contactData);
  //   }
  // }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      const filterdData = data.filter((contact) => {
        return (
          contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
          -1
        );
      });
      return filterdData.map((contact, i) => {
        return (
          <ContactInfo
            contact={contact}
            key={i + contact.toString()}
            onClick={() => {
              this.props.onClick(i);
            }}
            onKeyDown={() => {
              this.props.onKeyDown(i);
            }}
          />
        );
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          type="text"
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.props.contactData)}</div>
        <ContactDetails
          isSelected={this.props.selectedKey > -1}
          contact={this.props.contactData[this.props.selectedKey]}
          // onRemove={this.handleRemove}
          // onEdit={this.handleEdit}
        />
        {/* <ContactCreate onCreate={this.handleCreate} /> */}
        <ContactCreate />
      </div>
    );
  }
}

Contact.defaultProps = {
  contactData: [],
  selectedKey: -1,
  onClick: () => {},
  onKeyDown: () => {},
};

Contact.propTypes = {
  contactData: PropTypes.array,
  selectedKey: PropTypes.number,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (index) => dispatch(selectContact(index)),
    onKeyDown: (index) => dispatch(selectContact(index)),
  };
};

const mapStateToProps = (state) => {
  return {
    selectedKey: state.selectedKey,
    contactData: state.contactData,
  };
};
Contact = connect(mapStateToProps, mapDispatchToProps)(Contact);
