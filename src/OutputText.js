import React from 'react';
import Container from '@material-ui/core/Container';
import {scores} from './data/dummyData';
import Calc from './PercentCalc';

/* Text that dynamically fills the dialog box based on the entered Candidate ID */
/* if the Candidate's company has no other substitutes/similar companies, the   */
/* text changes to satisfy 1 company                                            */
const OutputText = (props) => {
  const {submission} = props;
  const submitNum = Number(submission);

  //To check if the user exists on line 22
  const allUsers = scores.map(user => user.candidate_id);
  const user = {...scores.filter(user => user.candidate_id === submitNum)[0]};

  //Calcuations for percentile ranks performed within these classes
  const comsCalc = new Calc(user, 'communication');
  const codingCalc = new Calc(user, 'coding');

  return (
    <React.Fragment>
      { allUsers.includes(submitNum) ?
      <Container component="div">
        Based on {comsCalc.similarCompanies().length} {comsCalc.similarCompanies().length > 1 ? 'similar companies, including the candidate\'s own' : 'company (the candidate\'s)'}, among {comsCalc.scoreArr().length} {comsCalc.userTitle}s, they rank in the {comsCalc.rank().toFixed(2)}th Percentile  in Communcations and the {codingCalc.rank().toFixed(2)}th Percentile regarding Coding aptitude.
      </Container> :
      <Container>
        Please enter a valid Candidate ID
      </Container>
      }
    </React.Fragment>
  )
}

export default OutputText;
