import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import CONTACTS from './Contacts';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: CONTACTS,
    filter: '',
  };

  addUser = userData => {
    const newUser = {
      id: nanoid(),
      ...userData,
    };

    if (!this.state.contacts.some(contact => contact.name === newUser.name)) {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newUser] };
      });
    } else {
      alert(`${newUser.name} is already in contacts.`);
      return null;
    }
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(user => user.id !== id) };
    });
  };

  setFilter = filterData => {
    this.setState({ filter: filterData.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
          flexDirection: 'column',
          width: '300px',
          margin: '0 auto',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactList
          users={filteredContacts}
          deleteUser={this.deleteUser}
          className={css.list}
        />
      </div>
    );
  }
}
