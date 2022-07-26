import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
  PeopleList.propTypes = {
    people: PropTypes.array,
  }

  return (
    <ul className={styles.people__list}>
      {people.map(({ id, name, img }) => {
        return (
          <li
            key={id}
            className={styles.people__item}>
            <NavLink
              to={`/people/${id}`}
              className={styles.people__link}>
              <img
                src={img}
                alt={name}
                className={styles.people__img}
              />
              <h2 className={styles.people__name}>{name}</h2>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );

}

export default PeopleList;