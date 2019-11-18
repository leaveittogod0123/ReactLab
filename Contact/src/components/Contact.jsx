import React, { Component } from "react";
import ContactInfo from "./ContactInfo";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      contactData: [
        {
          name: "Abet",
          phone: "010-0000-0001",
        },
        {
          name: "Betty",
          phone: "010-0000-0001",
        },
        {
          name: "Charie",
          phone: "010-0000-0001",
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
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
        return <ContactInfo contact={contact} key={i + contact.toString()} />;
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
      </div>
    );
  }
}
