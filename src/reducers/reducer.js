import { combineReducers } from 'redux'

var reducer = function(state = {contacts: [], currentContact: ""}, action) {
    switch (action.type) {
        case "UPDATE_CONTACT":
            return {contacts: state.contacts, currentContact: action.contact};
        case "GET_CONTACTS":
            return {contacts: action.contacts.map(function(item, index) {
                return {id: item._id.$oid, name: item.name, phone: item.phone, email: item.email }
            }),
                currentContact: state.currentContact};
        case "ADD_CONTACT":
            return {contacts: [ ...state.contacts, {id: action.contact._id.$oid, name: action.contact.name, phone: action.contact.phone, email: action.contact.email }],
                currentContact: state.currentContact};
        case "DELETE_CONTACT":
            return {contacts: state.contacts.filter(contact => contact.id !== action.id),
                currentContact: state.currentContact};
        case "SAVE_CONTACT":
            return {contacts: state.contacts.map(function(item, index){
                if(item.id == action.contact.id)
                    return {id: action.contact._id.$oid, name: action.contact.name, phone: action.contact.phone, email: action.contact.email }
                else
                    return item
            }),
                currentContact: ""};
        default:
            return state;
    }
    return state;
};

    module.exports = reducer;
