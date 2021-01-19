import {companies, scores} from './data/dummyData';
import {percentile, zscore, isSimilar} from './PercentHelpers';


const ComsPercent = () => {
  /* Find basic info */
  //Get user object
  const userObj ={...scores.filter(user => user.candidate_id === 890)[0]}
  //Get user's company ID
  const userCompId = userObj.company_id
  //Get user's title
  const userTitle = userObj.title
  //Get user's company fractal index
  const userCompanyScore = companies.filter(company => company.company_id === userCompId)[0].fractal_index

  /* Filtering for same title and similar companies */
  //Find similar companies based on user's company index score
  const similarCompanies = companies.filter(company => isSimilar(company.fractal_index, userCompanyScore))
  //Convert similar companyies array to just their IDs
  const arrOfCompIds = similarCompanies.map(company => company.company_id)
  //Filter for where titles are the same and are similar companies
  const filterScores = scores.filter(user => user.title === userTitle && arrOfCompIds.includes(user.company_id))
  //Create an array of scores for zscore/perecentile calcs
  const scoreArr = filterScores.map(user => user.coding_score)

  /* Calculations */
  //User zscore and percentile calcs
  const userZ = zscore(scoreArr, userObj.coding_score)
  const userPercent = percentile(userZ)

  return (
    <div>Your Coding Percentile Rank based on your Role and similar companies is the {userPercent*100} Percentile</div>
  )
}

export default ComsPercent;
