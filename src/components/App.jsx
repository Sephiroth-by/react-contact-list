import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/actions';
import AddForm from './AddForm';
import EditForm from './EditForm';
import ContactList from './ContactList';
 
class App extends React.Component {

    render() {
        if(this.props.currentContact == ''){
           var form = <AddForm addContact={this.props.onAddContact} />;
        }
        else{
           var form = <EditForm currentContact={this.props.currentContact} onEditContact={this.props.onEditContact} />;
        }
          return <div>
                    {form}
                    <ContactList {...this.props} />
                </div>
      }
};

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        currentContact: state.currentContact
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveContact: (id) => {
            dispatch(Actions.deleteContactAPI(id))
        },
        onAddContact: (contact) => {
            dispatch(Actions.postContactAPI(contact))
        },
        onBeginUpdateContact: (contact) => {
            dispatch(Actions.beginUpdateContact(contact))
        },
        onEditContact: (contact) => {
            dispatch(Actions.updateContactAPI(contact))
        }
    };
}
 
module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
