import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePersonFromFavorite, setPersonToFavorite } from '../../../store/actions';
import favoriteIcon from './img/favorite.svg';
import favoriteIconFill from './img/favorite-fill.svg';


import styles from './PersonPhoto.module.css';

function PersonPhoto({
  personId,
  personPhoto,
  personName,
  personFavorite,
  setPersonFavorite,
}) {
  PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
  }

  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      }));
      setPersonFavorite(true);
    }
  }

  return (
    <>
      <img className={styles.PersonPhoto__img}
        src={personPhoto}
        alt={personName}
      />
      <button onClick={dispatchFavoritePeople} className={styles.PersonPhoto__button}>
        {personFavorite
          ? <img src={favoriteIconFill} alt="remove" className={styles.PersonPhoto__icon} />
          : <img src={favoriteIcon} alt="add" className={styles.PersonPhoto__icon} />
        }
      </button>
    </>
  );
}

export default PersonPhoto;