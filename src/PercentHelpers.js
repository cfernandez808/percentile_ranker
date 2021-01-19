import {std} from 'mathjs';
import ztable from 'ztable';

//Output: Standard deviation (sample) calc for zscore use
export const sampleStdDev = (scores) => {
  return std(scores)
}

//Output: Average calc for zscore use
export const sampleAvg = (scores) => {
  const sum = scores.reduce((num1, num2) => num1 + num2, 0)
  return (sum / scores.length)
}

//Output: normalizes score into zscore (normal distribution)
export const zscore = (scores, userScore) => {
  const avg = sampleAvg(scores)
  const sd = sampleStdDev(scores)

  return ((userScore - avg) / sd)
}

//Finds if two companies are similar
export const isSimilar = (company1, company2) => {
  return Math.abs(company1 - company2) < 0.15
}

//Output: decimal representing percentile rank of score, based from zscore calculation
export const percentile = (zscore) => {
  return ztable(zscore)
}


