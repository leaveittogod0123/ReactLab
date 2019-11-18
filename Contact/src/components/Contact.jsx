import React, { Component } from "react";
import ContactInfo from "./ContactInfo";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const mapToComponents = data => {
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i + contact.toString()} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
