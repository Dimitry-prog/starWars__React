import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index';
import styles from './Button.module.css';

function Button({
  text,
  onClick,
  disabled,
  theme = 'button__dark',
  classes,
}) {
  Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
  }
  return (
    <button
      className={classnames(styles.button, styles[theme], classes)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;