// import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ setFilter }) {
  return (
    <div className={css.wrapFilter}>
      <h2 className={css.h2}>Find contacts by name</h2>
      <input type="text" placeholder="Search" onChange={setFilter} />
    </div>
  );
}
export default Filter;
