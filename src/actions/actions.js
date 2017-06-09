
import axios from "axios";

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
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then(response =>dispatch(getContacts(response.data)))
    }
}

function postContactAPI(contact) {
    return function (dispatch) {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: contact,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response =>dispatch(addContact(response.data)))
    }
}

function updateContactAPI(contact) {
    return function (dispatch) {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts/" + contact.id + "?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'put',
            responseType: 'json',
            data: {"$set" : {"name" : contact.name, "phone" : contact.phone, "email": contact.email}},
            headers: {'Content-Type': 'application/json' }
        })
            .then(response =>dispatch(saveEditContact(response.data)))
    }
}


function deleteContactAPI(id) {
    return function (dispatch) {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts/" + id + "?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'delete',
            responseType: 'json',
            headers: {'Content-Type': 'application/json' }
        })
            .then(response =>dispatch(removeContact(id)))
    }
}

module.exports = { getContactsAPI, postContactAPI, updateContactAPI, deleteContactAPI, beginUpdateContact };