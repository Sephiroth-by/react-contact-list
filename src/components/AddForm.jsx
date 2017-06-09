﻿import React from 'react';

class AddForm extends React.Component {

    onSubmit(e) {
        e.preventDefault();

        var contact = {
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim(),
        }

        this.refs.name.value = '';
        this.refs.phone.value = '';
        this.refs.email.value = '';

        this.props.addContact(contact);
    }

    render() {
        return (
            <div>
                <h3 className="text-center">
                    <strong>Add Contact</strong>
                </h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" ref="name" className="form-control" placeholder="Add name" />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" className="form-control" placeholder="Add phone" />
                    </div>
                     <div className="form-group">
                        <input type="text" ref="email" className="form-control" placeholder="Add email" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

module.exports = AddForm;