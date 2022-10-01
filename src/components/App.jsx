import { useState } from 'react';
import Statistics from './Statistics';
import FeedBackOptions from './FeedBackOptions';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / countTotalFeedback()) * 100;
    return Math.round(positivePercentage);
  };

  const options = ['good', 'neutral', 'bad'];
  return (
    <div className={css.container}>
      <div className={css.feedbacks}>
        <Section title="Please leave Feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
