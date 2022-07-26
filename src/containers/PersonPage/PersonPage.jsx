import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router';

import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { getPeopleImg } from '../../services/getPeopleData';

import styles from './PersonPage.module.css';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import Loading from '../../components/UI/Loading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms'));

function PersonPage({ setErrorApi }) {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const { id } = useParams();
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personId, setPersonId] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const response = await getApiResource(`${API_PERSON}/${id}/`);

      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (response) {
        setPersonInfo([
          { title: 'Height', data: response.height, },
          { title: 'Mass', data: response.mass, },
          { title: 'Hair Color', data: response.hair_color, },
          { title: 'Skin Color', data: response.skin_color, },
          { title: 'Eye Color', data: response.eye_color, },
          { title: 'Birth Year', data: response.birth_year, },
          { title: 'Gender', data: response.gender, },
        ]);
        setPersonName(response.name);
        setPersonPhoto(getPeopleImg(id));
        response.films.length && setPersonFilms(response.films);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
  }

  return (
    <>
      <PersonLinkBack />
      <div className={styles.PersonPage}>
        <h1 className={styles.PersonPage__title}>
          {personName}
        </h1>
        <div className={styles.PersonPage__profile}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo
            personInfo={personInfo}
          />}
          {personFilms && (
            <Suspense fallback={<Loading
              theme="white"
              isShadow
            />}>
              <PersonFilms
                personFilms={personFilms}
              />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}
export default withErrorApi(PersonPage);