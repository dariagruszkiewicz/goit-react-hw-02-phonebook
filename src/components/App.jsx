import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addNewContact = contact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          contact,
          id: nanoid(),
        },
      ],
    }));
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <>
        <Form onSubmit={this.addNewContact} />
        <ul>
          {contacts.map(item => (
            <li key={item.id}>{item.contact}</li>
          ))}
        </ul>
      </>
    );
  }
}
