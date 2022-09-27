import PropTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        className={styles.btn}
        key={option}
        name={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
