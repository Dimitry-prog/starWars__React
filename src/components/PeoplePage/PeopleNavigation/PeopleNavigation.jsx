import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

import styles from './PeopleNavigation.module.css';

function PeopleNavigation({
  getResource,
  prevPage,
  nextPage,
  currentPage
}) {
  PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    currentPage: PropTypes.number,
  }

  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.PeopleNavigation__list}>
        <li className={styles.PeopleNavigation__item}>
          <Link
            to={`/people/?page=${currentPage - 1}`} className={styles.PeopleNavigation__link}>
            <Button
              text="Previous"
              onClick={handleChangePrev}
              disabled={!prevPage}
            >
            </Button>
          </Link>
        </li>
        <li className={styles.PeopleNavigation__item}>
          <Link
            to={`/people/?page=${currentPage + 1}`} className={styles.PeopleNavigation__link}>
            <Button
              text="Next"
              onClick={handleChangeNext}
              disabled={!nextPage}
            >
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PeopleNavigation;