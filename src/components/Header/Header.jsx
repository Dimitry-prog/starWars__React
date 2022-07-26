import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite';
import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '../../context/ThemeProvider';

import styles from './Header.module.css';
import { useEffect, useState } from 'react';

function Header() {
  const [icon, setIcon] = useState(imgDroid);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;
      default: setIcon(imgDroid);
    }
  }, [isTheme]);

  return (
    <nav className={styles.navbar}>
      <img src={icon} alt="star wars" className={styles.navbar__icon} />
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <NavLink to="/" className={styles.navbar__link}>Home</NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/people/?page=1" className={styles.navbar__link}>People</NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/not-found" className={styles.navbar__link}>Not Found</NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/search" className={styles.navbar__link}>Search</NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/fail" className={styles.navbar__link}>Fail</NavLink>
        </li>
      </ul>
      <Favorite />
    </nav >
  );
}

export default Header;