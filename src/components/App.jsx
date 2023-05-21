import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: Contacts,
    filter: '',
  };
  addUser = userData => {
    const newUser = {
      id: nanoid(),
      ...userData,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(user => user.id !== id) };
    });
  };
  render() {
    const { contacts } = this.state;
    console.log({ contacts });
    return (
      <div
        style={{
          height: '100vh',
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
        {/* <Filter /> */}
        <ContactList
          users={contacts}
          deleteUser={this.deleteUser}
          className={css.list}
        />
      </div>
    );
  }
}
