import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SearchPageInfo.module.css';

function SearchPageInfo({ people }) {

  return (
    <div className={styles.SearchPageInfo}>
      {people.length
        ? (
          <ul className={styles.SearchPageInfo__list}>
            {people.map(({ id, name, img }) =>
              <li key={id} className={styles.SearchPageInfo__item}>
                <Link to={`/people/${id}`} className={styles.SearchPageInfo__link}>
                  <img src={img} alt={name} className={styles.SearchPageInfo__img} />
                  <h2 className={styles.SearchPageInfo__title}>{name}</h2>
                </Link>
              </li>
            )}
          </ul>
        )
        : <h2 className={styles.SearchPageInfo__error}>No Match</h2>
      }
    </div>
  );
}

SearchPageInfo.propTypes = {
  people: PropTypes.array,
}

export default SearchPageInfo;