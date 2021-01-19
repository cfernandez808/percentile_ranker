import React from 'react';
import Container from '@material-ui/core/Container';
import {companies, scores} from './data/dummyData';
import {percentile, zscore, isSimilar} from './PercentHelpers';
import Calc from './PercentCalc';


const ComsPercent = (props) => {
  const {submission} = props;
  const submitNum = Number(submission);

  const allUsers = scores.map(user => user.candidate_id);
  const user = {...scores.filter(user => user.candidate_id === submitNum)[0]};

  const codingCalc = new Calc(user, 'coding');

  return (
    <React.Fragment>
      { allUsers.includes(submitNum) ?
      <Container component="div">
         {codingCalc.rank().toFixed(2)}th Percentile regarding Coding aptitude.
      </Container> : ''
      }
    </React.Fragment>
  )
}

export default ComsPercent;
