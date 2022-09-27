import React, { useState } from 'react';
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
  let total = countTotalFeedback();

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
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const positivePercentage =
//       (this.state.good / this.countTotalFeedback()) * 100;

//     return Math.round(positivePercentage);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     let total = this.countTotalFeedback();
//     let positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.container}>
//         <div className={css.feedbacks}>
//           <Section title="Please leave Feedback">
//             <FeedBackOptions
//               options={options}
//               onLeaveFeedback={this.onLeaveFeedback}
//             />
//           </Section>

//           <Section title="Statistics">
//             {total ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positiveFeedbackPercentage={positiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }
