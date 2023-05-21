import css from './User.module.css';

export function User({ user: { name, tel, id }, deleteUser }) {
  return (
    <div className={css.wrap}>
      <p className={css.userAvatar}></p>
      <div>
        {name}: {tel}
      </div>

      <div>
        <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
    </div>
  );
}
