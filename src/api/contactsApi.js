import axios from "axios";

class ContactsApi {

    static getContactsAPI() {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        });
    }

    static postContactAPI(contact) {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: contact,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    static updateContactAPI(contact) {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts/" + contact.id + "?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'put',
            responseType: 'json',
            data: { "$set": { "name": contact.name, "phone": contact.phone, "email": contact.email } },
            headers: { 'Content-Type': 'application/json' }
        });
    }

    static deleteContactAPI(id) {
        return axios({
            url: "https://api.mlab.com/api/1/databases/contact-list/collections/contacts/" + id + "?apiKey=nb3xCyPipDiF6gw1aLjOkatZdoet8rep",
            timeout: 20000,
            method: 'delete',
            responseType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

module.exports = ContactsApi;