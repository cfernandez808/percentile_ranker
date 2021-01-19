import {percentile, zscore, isSimilar} from './PercentHelpers';
import {companies, scores} from './data/dummyData';

/* Percentile rank calculator and more */
export default class Calc {
  constructor(user, type) {
    this.user = user
    this.userCompId = this.user.company_id
    this.userTitle = this.user.title
    this.type = type
  }

  //Gets the fractal_index of the Candidate's company
  userCompanyScore () {
    return companies.filter(company => company.company_id === this.userCompId)[0].fractal_index
  }

  //Finds all similar companies to the Candidate's company
  similarCompanies () {
    return companies.filter(company => isSimilar(company.fractal_index, this.userCompanyScore()))
  }

  //Simplifies the above returned array to just company IDs
  arrOfCompIds () {
    return this.similarCompanies().map(company => company.company_id)
  }

  //Filters ALL scores to match the Candidate's employment title & of a similar company
  filterScores () {
    return scores.filter(user => user.title === this.userTitle && this.arrOfCompIds().includes(user.company_id))
  }

  //Simplifies above returned array to only scores (number values)
  scoreArr () {
    return this.filterScores().map(user => user[`${this.type}_score`])
  }

  //Calculate's the user's z-score
  userZ () {
    return zscore(this.scoreArr(), this.user[`${this.type}_score`])
  }

  //Converts the user's z-score to a percentile rank
  rank () {
    return percentile(this.userZ())*100
  }
}
