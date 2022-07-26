import PropTypes from 'prop-types';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '../../../context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarktSide from './img/dark-side.jpg';
import imgNeutraltSide from './img/neutral-side.jpg';
import cn from 'classnames';

import styles from './ChooseSide.module.css';

const ChooseSideImg = ({
  classes,
  theme,
  text,
  img
}) => {

  const isTheme = useTheme();

  return (
    <div className={cn(styles.ChooseSideImg__container, classes)}
      onClick={() => isTheme.changeTheme(theme)}
    >
      <h2 className={styles.ChooseSideImg__title}>{text} </h2>
      <img src={img} alt={text} className={styles.ChooseSideImg__img} />
    </div>
  )
};

ChooseSideImg.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}

function ChooseSide() {
  const themes = [
    {
      classes: styles.ChooseSideImg__light,
      theme: THEME_LIGHT,
      text: "Light side",
      img: imgLightSide,
    },
    {
      classes: styles.ChooseSideImg__dark,
      theme: THEME_DARK,
      text: "Dark side",
      img: imgDarktSide,
    },
    {
      classes: styles.ChooseSideImg__neutral,
      theme: THEME_NEUTRAL,
      text: "Neutral side",
      img: imgNeutraltSide,
    },
  ];

  return (
    <div className={styles.ChooseSide}>
      {themes.map((item, index) => (
        <ChooseSideImg
          key={index}
          classes={item.classes}
          theme={item.theme}
          text={item.text}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default ChooseSide;