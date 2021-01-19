import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';

/* Hacky tests but checks to see if the DynamoDB data is properly getting retrieved */
/* Check Browser's console log                                                      */
const ScoresTest = () => {
  const [scores, setScores] = useState([]);

  console.log('There should be 59 users in the scores table')

  useEffect(() => {
    API.get('scoreApi', '/scores/candidate_id')
    .then(response => setScores(response))
  }, [])

  console.log(`There are ${scores.length} users in the scores table.........`)
  return (
    <React.Fragment />
  )
}

export default ScoresTest;
