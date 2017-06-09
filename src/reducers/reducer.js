import { combineReducers } from 'redux'

var currentContact = function(state = "", action) {
    switch (action.type) {
        case "UPDATE_CONTACT":
            return action.contact;
        case "SAVE_CONTACT":
            return "";
        default:
            return state;
    }
    return state;
};

var contacts = function(state = [], action) {
    switch (action.type) {
        case "GET_CONTACTS":
            return action.contacts.map(function(item, index) {
                return {id: item._id.$oid, name: item.name, phone: item.phone, email: item.email }
            });
        case "ADD_CONTACT":
            return [ ...state, {id: action.contact._id.$oid, name: action.contact.name, phone: action.contact.phone, email: action.contact.email }];
        case "DELETE_CONTACT":
            return state.filter(contact => contact.id !== action.id);
        case "SAVE_CONTACT":
            return state.map(function(item, index){
                if(item.id == action.contact.id){
                    return Object.assign({}, item, {name: action.contact.name, phone: action.contact.phone, email: action.contact.email});
                }
                return item;
            });
        default:
            return state;
    }
    return state;
};

    const reducer = combineReducers({
        currentContact,
        contacts
    });

module.exports = reducer;
