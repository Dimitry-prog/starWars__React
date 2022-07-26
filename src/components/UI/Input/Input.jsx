import PropTypes from 'prop-types';
import iconCancel from './img/cancel.svg';
import classnames from 'classnames'

import styles from './Input.module.css';

function Input({
  value,
  handleInputChange,
  placeholder,
  classes,
}) {

  return (
    <div className={classnames(styles.container, classes)}>
      <input
        type="text"
        value={value}
        onChange={(event) => handleInputChange(event.target.value)}
        placeholder={placeholder}
        className={styles.Input}
      />
      <button className={classnames(styles.Input__button, !value && styles.Input__button_disabled)}
        onClick={() => value && handleInputChange('')}
      >
        <img src={iconCancel} alt="clear" className={styles.Input__icon} />
      </button>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
}

export default Input;