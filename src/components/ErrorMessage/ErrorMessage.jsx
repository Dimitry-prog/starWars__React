import Video from '../UI/Video';
import videoHanSolo from './video/han-solo.mp4'

import styles from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <>
      <h2 className={styles.errorMessage__title}>
        The dark side of the force has won</h2>
      <p className={styles.errorMessage__subtitle}>We cannot display data</p>
      <p className={styles.errorMessage__subtitle}>Come back when the light side wins</p>
      <Video
        src={videoHanSolo}
        playbackRate={1}
        classes={styles.errorMessage__video}
      />
    </>
  );
}

export default ErrorMessage;