import PropTypes from 'prop-types';

import styles from './PersonInfo.module.css';

function PersonInfo({ personInfo }) {
  PersonInfo.propTypes = {
    personInfo: PropTypes.array,
  }

  return (
    <ul className={styles.PersonInfo__list}>
      {personInfo.map(({ title, data }) => (
        data && (
          <li
            className={styles.PersonInfo__item}
            key={title}>
            <span className={styles.PersonInfo__span}>{title}</span>: {data}
          </li>
        )
      ))}
    </ul>
  );
}

export default PersonInfo;