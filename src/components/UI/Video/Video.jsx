import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import styles from './Video.module.css';

function Video({
  src,
  playbackRate = 1.0,
  classes
}) {

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      loop
      autoPlay
      muted
      ref={videoRef}
      className={classNames(styles.Video, classes)}
    >
      <source src={src} />
    </video>
  );
}

Video.propTypes = {
  src: PropTypes.string,
  playbackRate: PropTypes.number,
  classes: PropTypes.string,
}

export default Video;