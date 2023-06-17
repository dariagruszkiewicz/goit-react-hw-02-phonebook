import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', contact: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', contact: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', contact: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', contact: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
          number: number,
        },
      ],
    }));
  };

  inputFilter = e => {
    const contacts = this.state.contacts;
    const value = e.target.value;
    const names = contacts.map(item => item.contact);
    this.setState({ filter: value });
    console.log(value);
    const filtredNames = names.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filtredNames);
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(contacts);
    return (
      <>
        <h1>Phonebooks</h1>
        <Form onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.inputFilter}
          />
        </label>
        <ul>
          {contacts.map(item => (
            <li key={item.id}>
              {item.contact}: {item.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
