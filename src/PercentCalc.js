import {percentile, zscore, isSimilar} from './PercentHelpers';
import {companies, scores} from './data/dummyData';

export default class Calc {
  constructor(user, type) {
    this.user = user
    this.userCompId = this.user.company_id
    this.userTitle = this.user.title
    this.type = type
  }

  userCompanyScore () {
    return companies.filter(company => company.company_id === this.userCompId)[0].fractal_index
  }

  similarCompanies () {
    return companies.filter(company => isSimilar(company.fractal_index, this.userCompanyScore()))
  }

  arrOfCompIds () {
    return this.similarCompanies().map(company => company.company_id)
  }

  filterScores () {
    return scores.filter(user => user.title === this.userTitle && this.arrOfCompIds().includes(user.company_id))
  }

  scoreArr () {
    return this.filterScores().map(user => user[`${this.type}_score`])
  }

  userZ () {
    return zscore(this.scoreArr(), this.user[`${this.type}_score`])
  }

  rank () {
    return percentile(this.userZ())*100
  }
}
