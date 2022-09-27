import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedBackOptions from './FeedBackOptions';
import Section from './Section';
import Notification from './Notification';

import css from './App.module.css';




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(positivePercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    let total = this.countTotalFeedback();
    let positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <div className={css.feedbacks}>
          <Section title="Please leave Feedback">
            <FeedBackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedbackPercentage={positiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
