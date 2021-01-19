import React from 'react';
import Container from '@material-ui/core/Container';
import {companies, scores} from './data/dummyData';
import {percentile, zscore, isSimilar} from './PercentHelpers';
import Calc from './PercentCalc';


const OutputText = (props) => {
  const {submission} = props;
  const submitNum = Number(submission);

  const allUsers = scores.map(user => user.candidate_id);
  const user = {...scores.filter(user => user.candidate_id === submitNum)[0]};

  const comsCalc = new Calc(user, 'communication');
  const codingCalc = new Calc(user, 'coding');

  return (
    <React.Fragment>
      { allUsers.includes(submitNum) ?
      <Container component="div">
        Based on {comsCalc.similarCompanies().length} {comsCalc.similarCompanies().length > 1 ? 'similar companies, including the candidate\'s own,' : 'company (the candidate\'s)'} they rank in the {comsCalc.rank().toFixed(2)}th Percentile  in Communcations and the {codingCalc.rank().toFixed(2)}th Percentile regarding Coding aptitude.
      </Container> :
      <Container>
        Please enter a valid Candidate ID
      </Container>
      }
    </React.Fragment>
  )
}

export default OutputText;
