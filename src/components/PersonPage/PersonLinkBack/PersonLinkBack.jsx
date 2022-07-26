import { useNavigate } from 'react-router';
import iconBack from './img/back.svg'

import styles from './PersonLinkBack.module.css';

function PersonLinkBack() {
  const navigation = useNavigate();

  const handleGoBack = (event) => {
    event.preventDefault();
    navigation(-1);
  }

  return (
    <a
      href="#"
      onClick={handleGoBack}
      className={styles.PersonLinkBack__link}
    >
      <img src={iconBack} alt="go back" className={styles.PersonLinkBack__img} />
      <p className={styles.PersonLinkBack__text}>Go Back</p>
    </a>
  );
}

export default PersonLinkBack;