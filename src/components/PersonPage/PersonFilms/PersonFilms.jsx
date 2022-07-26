import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { changeHTTP, makeConcurrentRequest } from '../../../utils/network';

import styles from './PersonFilms.module.css';

function PersonFilms({ personFilms }) {
  PersonFilms.propTypes = {
    personFilms: PropTypes.array,
  }

  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map(url => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  return (
    <ul className={styles.PersonFilms__list}>
      {filmsName
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(({ title, episode_id }) =>
          <li className={styles.PersonFilms__item}
            key={episode_id}
          >
            <p className={styles.PersonFilms__text}>
              <span className={styles.PersonFilms__episode}>Episode {episode_id}</span>:
              <span className={styles.PersonFilms__title}> {title}</span>
            </p>
          </li>
        )}
    </ul>
  );
}

export default PersonFilms;