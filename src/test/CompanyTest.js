import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';

/* Hacky tests but checks to see if the DynamoDB data is properly getting retrieved */
/* Check Browser's console log                                                      */
const CompanyTest = () => {
  const [companies, setCompanies] = useState([]);
  console.log('There should be 5 companies in the companies table')
  useEffect(() => {
    API.get('comapyApi', '/companies/company_id')
    .then(response => setCompanies(response))
  }, [])

  console.log(`There are ${companies.length} companies in the companies table.........`)
  return (
    <React.Fragment />
  )
}

export default CompanyTest;
