import {
  CREATECONTACT,
  MODIFYCONTACT,
  REMOVECONTACT,
  SELECTCONTACT,
  ISEDITCONTACT,
} from "./actionTypes";

export function createContact(name, phone) {
  return {
    type: CREATECONTACT,
    name,
    phone,
  };
}

export function modifyContact(name, phone) {
  return {
    type: MODIFYCONTACT,
    name,
    phone,
  };
}

export function removeContact() {
  return {
    type: REMOVECONTACT,
  };
}

export function selectContact(selectedKey) {
  return {
    type: SELECTCONTACT,
    selectedKey,
  };
}

export function isEditContact() {
  return {
    type: ISEDITCONTACT,
  };
}
