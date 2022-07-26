import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { changeHTTP, getApiResource } from '../../utils/network';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';

import styles from './PeoplePage.module.css';

function PeoplePage({ setErrorApi }) {
  PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
  }

  const [people, setPeople] = useState(null);
  const query = useQueryParams();
  const queryPage = query.get('page');
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrenttPage] = useState(1);

  const getResource = async (url) => {
    const response = await getApiResource(url);

    if (response) {
      const peopleList = response.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name: name,
          img,
        }
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(response.previous));
      setNextPage(changeHTTP(response.next));
      setCurrenttPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
}

export default withErrorApi(PeoplePage);
