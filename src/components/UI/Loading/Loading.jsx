import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classname from 'classnames'

import loaderWhite from './img/loader-white.svg'
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'

import './index';
import styles from './Loading.module.css';

function Loading({
  theme = "white",
  isShadow = true,
  classes,
}) {
  Loading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
  }

  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "white": setLoaderIcon(loaderWhite); break;
      case "black": setLoaderIcon(loaderBlack); break;
      case "blue": setLoaderIcon(loaderBlue); break;
      default: setLoaderIcon(loaderWhite);
    }
  }, []);

  return (
    <img
      src={loaderIcon}
      alt="Loader"
      className={classname(styles.Loading__img, isShadow && styles.Loading__shadow, classes)} />
  );
}

export default Loading;