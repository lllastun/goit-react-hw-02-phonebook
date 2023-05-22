// import PropTypes from 'prop-types';
import React from 'react';
import { User } from './User';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

export default function ContactList({ users, deleteUser }) {
  // console.log({ users });
  return users.map(user => {
    return (
      <div className={css.contactsList} key={nanoid()}>
        <User user={user} key={user.id} deleteUser={deleteUser} />
      </div>
    );
  });
}
