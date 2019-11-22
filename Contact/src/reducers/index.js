import {
  CREATECONTACT,
  MODIFYCONTACT,
  REMOVECONTACT,
  SELECTCONTACT,
} from "../actions/actionTypes";

const initialState = {
  selectedKey: -1,
  isEdit: false,
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

export default function manageContact(state = initialState, action) {
  switch (action.type) {
    case CREATECONTACT: {
      const { contactData } = state;
      const contact = {};
      contact.name = action.name;
      contact.phone = action.phone;
      contactData.concat(contact);
      return {
        ...state,
        contactData: contactData.concat(contact),
      };
    }

    case MODIFYCONTACT: {
      const { contactData, selectedKey } = state;
      const contact = {};
      contact.name = action.name;
      contact.phone = action.phone;
      contactData[selectedKey] = contact;
      return {
        ...state,
        contactData: [...contactData],
      };
    }

    case REMOVECONTACT: {
      let { selectedKey, contactData } = state;
      contactData = contactData.filter(
        (contact, index) => index !== selectedKey,
      );

      selectedKey = -1;
      return {
        ...state,
        selectedKey,
        contactData,
      };
    }

    case SELECTCONTACT: {
      return {
        ...state,
        selectedKey: action.selectedKey,
      };
    }

    default:
      return state;
  }
}
