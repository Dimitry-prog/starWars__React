import { useLocation } from "react-router-dom";

import imgNotFound from './img/not-found.png'
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  let location = useLocation();

  return (
    <div className={styles.notFoundPage}>
      <img src={imgNotFound} alt="not found" className={styles.notFoundPage__img} />
      <h2 className={styles.notFoundPage__text}> No match for {location.pathname}</h2>
    </div>
  );
}

export default NotFoundPage;