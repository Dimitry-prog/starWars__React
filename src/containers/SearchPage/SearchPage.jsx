import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import Input from '../../components/UI/Input';
import { API_SEARCH } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { debounce } from '../../utils/debounce';
import { getApiResource } from '../../utils/network';

import styles from './SearchPage.module.css';

function SearchPage({ setErrorApi }) {
  SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
  }

  const [searchValueInput, setSearchValueInput] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async value => {
    const response = await getApiResource(API_SEARCH + value);

    if (response) {
      const peopleList = response.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name,
          img
        }
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResponse('');
  }, []);


  const debouncedGetResponse = useCallback(
    debounce(getResponse), []
  );

  const handleInputChange = value => {
    setSearchValueInput(value);
    debouncedGetResponse(value);
  }

  return (
    <>
      <h1 className="header__title">
        Search
      </h1>
      <Input
        value={searchValueInput}
        handleInputChange={handleInputChange}
        placeholder='Enter character name'
        classes={styles.SearchPage__search}
      />
      <SearchPageInfo
        people={people}
      />
    </>
  );
}

export default withErrorApi(SearchPage);