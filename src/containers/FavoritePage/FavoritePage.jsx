import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import styles from './FavoritePage.module.css';

function FavoritePage() {
  const storeDate = useSelector(state => state.favoriteReducer);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const arr = Object.entries(storeDate);
    if (arr.length) {
      const result = arr.map(item => {
        return {
          id: item[0],
          ...item[1],
        }
      });
      setPeople(result);
    }
  }, []);

  return (
    <div className={styles.FavoritePage}>
      <h2 className={styles.FavoritePage__title}>FavoritePage</h2>
      {people.length
        ? <PeopleList people={people} />
        : <p className={styles.FavoritePage__text}>No Date</p>
      }
    </div>
  );
}

export default FavoritePage;