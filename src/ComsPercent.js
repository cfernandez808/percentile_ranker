import React from 'react';
import Container from '@material-ui/core/Container';
import {companies, scores} from './data/dummyData';
import {percentile, zscore, isSimilar} from './PercentHelpers';


const ComsPercent = (props) => {
  const {submission} = props
  const submitNum = Number(submission)

  const allUsers = scores.map(user => user.candidate_id)

  const calc = () => {
    //Get user object
    const userObj ={...scores.filter(user => user.candidate_id === submitNum)[0]}
    //Get user's company ID
    const userCompId = userObj.company_id
    //Get user's title
    const userTitle = userObj.title
    //Get user's company fractal index
    const userCompanyScore = companies.filter(company => company.company_id === userCompId)[0].fractal_index
    //Find similar companies based on user's company index score
    const similarCompanies = companies.filter(company => isSimilar(company.fractal_index, userCompanyScore))
    //Convert similar companyies array to just their IDs
    const arrOfCompIds = similarCompanies.map(company => company.company_id)
    //Filter for where titles are the same and are similar companies
    const filterScores = scores.filter(user => user.title === userTitle && arrOfCompIds.includes(user.company_id))
    //Create an array of scores for zscore/perecentile calcs
    const scoreArr = filterScores.map(user => user.communication_score)

    //User zscore and percentile calcs
    const userZ = zscore(scoreArr, userObj.communication_score)
    return percentile(userZ)*100

  }

  return (
    <React.Fragment>
      { allUsers.includes(submitNum) ?
      <Container component="div">
        Your Communication Percentile Rank based on your Role and similar companies is the {calc().toFixed(2)} Percentile
      </Container> :
      <Container>
        User Doesn't Exist!
      </Container>
      }
    </React.Fragment>
  )
}

export default ComsPercent;
