import { Component } from 'react';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({ name: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.name;

    this.props.onSubmit(name);

    // resetujemy dane
    // this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
