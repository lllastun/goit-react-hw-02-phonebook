import { Component } from 'react';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addUser({ ...this.state });
    this.setState({ name: '', tel: '' });
  };

  render() {
    const { name, tel } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name:
          <br /> <input name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Number: <br />
          <input
            name="tel"
            value={tel}
            type="tel"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button> Add contact </button>
      </form>
    );
  }
}
