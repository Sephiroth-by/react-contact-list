import ContactsApi from "../api/contactsApi"
let nextToDoId = 0;

var addContact = function (contact) {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

var removeContact = function (id) {
    return {
        type: "DELETE_CONTACT",
        id
    }
}

var getContacts = function (contacts) {
    return {
        type: "GET_CONTACTS",
        contacts: contacts
    }
}

var beginUpdateContact = function (contact) {
    return {
        type: "UPDATE_CONTACT",
        contact: contact
    }
}

var saveEditContact = function (contact) {
    return {
        type: "SAVE_CONTACT",
        contact: contact
    }
}

function getContactsAPI() {
    return function (dispatch) {
        ContactsApi.getContactsAPI().then(response =>dispatch(getContacts(response.data)))
    }
}

function postContactAPI(contact) {
    return function (dispatch) {
        ContactsApi.postContactAPI(contact).then(response =>dispatch(addContact(response.data)))
    }
}

function updateContactAPI(contact) {
    return function (dispatch) {
        ContactsApi.updateContactAPI(contact).then(response =>dispatch(saveEditContact(response.data)))
    }
}


function deleteContactAPI(id) {
    return function (dispatch) {
        ContactsApi.deleteContactAPI(id).then(response =>dispatch(removeContact(id)))
    }
}

module.exports = { getContactsAPI, postContactAPI, updateContactAPI, deleteContactAPI, beginUpdateContact };