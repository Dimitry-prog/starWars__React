import bookmarkIcon from './img/bookmark.svg';
import { useSelector } from 'react-redux';

import styles from './Favorite.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Favorite() {

  const [count, setCount] = useState();
  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const lengthPersonInFavorites = Object.keys(storeDate).length;
    lengthPersonInFavorites.toString().length > 2 ? setCount('...') : setCount(lengthPersonInFavorites);
  });

  return (
    <>
      <Link to="/favorites" className={styles.Favorite__link}>
        <span className={styles.Favorite__count}>{count}</span>
        <img src={bookmarkIcon} alt="favorites" className={styles.Favorite__icon} />
      </Link>

    </>
  );
}

export default Favorite;