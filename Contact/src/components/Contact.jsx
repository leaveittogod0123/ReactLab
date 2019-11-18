import React, { Component } from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: "",
      contactData: [
        {
          name: "Abet",
          phone: "010-0000-0001",
        },
        {
          name: "Betty",
          phone: "010-0000-0002",
        },
        {
          name: "Charie",
          phone: "010-0000-0003",
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleClick = (key) => {
    this.setState({
      selectedKey: key,
    });
  };

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
              this.handleClick(i);
            }}
            onKeyDown={() => {
              this.handleClick(i);
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
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey > -1}
          contact={this.state.contactData[this.state.selectedKey]}
        />
      </div>
    );
  }
}
