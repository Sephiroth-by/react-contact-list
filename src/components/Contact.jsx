import React from 'react';

class Contact extends React.Component {

    handleEdit(contact) {
        this.props.onBeginUpdateContact(contact);
    }

    handleRemove(id) {
        this.props.onRemoveContact(id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>
                    <a className="btn btn-primary" href="#" onClick={this.handleEdit.bind(this, this.props.contact)}>EDIT</a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={this.handleRemove.bind(this, this.props.contact.id)}>REMOVE</a>
                </td>
            </tr>
        );
                    }

}

module.exports = Contact;