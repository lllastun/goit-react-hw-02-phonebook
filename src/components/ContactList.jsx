// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { User } from './User';

export default function ContactList({ users, deleteUser }) {
  return users.map(user => {
    return <User user={user} key={user.id} deleteUser={deleteUser} />;
  });
}
