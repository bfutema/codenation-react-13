function isName(contact, name) {
  return contact.name.toUpperCase().includes(name.toUpperCase());
}

function filterByName(contacts, name) {
  return contacts.filter(contact => isName(contact, name));
}

export {
  filterByName,
}
