import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addNewContact = (contact, number) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          contact,
          id: nanoid(),
        },
      ],
      number: number,
    }));
  };

  render() {
    const { contacts, number } = this.state;
    console.log(contacts);
    console.log(number);
    return (
      <>
        <Form onSubmit={this.addNewContact} />
        <ul>
          {contacts.map(item => (
            <li key={item.id}>
              {item.contact}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
