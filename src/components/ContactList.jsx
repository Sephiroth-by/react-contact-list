import React from 'react';
import Contact from './Contact';


class ContactList extends React.Component {

    render() {
        var componentProps = this.props;
        return (
            <div>
                <h3 className="text-center">
                    <strong>
                        Contacts
                    </strong>
                </h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map(function(contact, index) {
                                return (
                                    <Contact contact={contact} key={index} onRemoveContact={componentProps.onRemoveContact} onBeginUpdateContact={componentProps.onBeginUpdateContact} />
                                )
                })
}
                    </tbody>
                </table>
            </div>
        );
                    }

}

module.exports = ContactList;