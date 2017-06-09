import React from 'react';

class EditForm extends React.Component {

    onChange(property, event){
        var value = event.target.value;
        var currentContact = this.props.currentContact;
        currentContact[property] = value;
        this.setState({currentContact: currentContact})
    }

    onSubmit(e) {
        e.preventDefault();

        var contact = {
            id: this.props.currentContact.id,
            name: this.state.currentContact.name,
            phone: this.state.currentContact.phone,
            email: this.state.currentContact.email,
        }

        this.props.onEditContact(contact);
    }

    render() {
        return (
            <div>
                <h3 className="text-center">
                    <strong>Edit Contact</strong>
                </h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" ref="name" onChange={this.onChange.bind(this, "name")} value={this.props.currentContact.name} className="form-control" placeholder="Edit name" />
                    </div>
                   <div className="form-group">
                        <input type="text" ref="phone" onChange={this.onChange.bind(this, "phone")} value={this.props.currentContact.phone} className="form-control" placeholder="Edit phone" />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="email" onChange={this.onChange.bind(this, "email")} value={this.props.currentContact.email} className="form-control" placeholder="Edit email" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

module.exports = EditForm;