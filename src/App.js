import React, {useState} from 'react'
import Navbar from './Components/Main/Navbar';
import InputForm from './Components/Main/InputForm';
import SubmitBtn from './Components/Main/SubmitBtn';
import PercentOutput from './Components/Main/PercentOutput';
import Background from './Components/Main/Background';
import CompanyTest from './test/CompanyTest';
import ScoresTest from './test/ScoresTest';

import { withAuthenticator} from '@aws-amplify/ui-react';



const App = () => {
  const [searchId, setSearchId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [submission, setSubmission] = useState(0);

  return (
    <div>
      {/* Nav */}
      <Navbar />

      {/* Background Logo, ID input, and Submit */}
      <div style={{position: 'relative'}}>
        <Background />
        <InputForm
          serachId={searchId}
          setSearchId={setSearchId}
        />
        <SubmitBtn
          setSubmission={setSubmission}
          setVisible={setVisible}
          visible={visible}
          searchId={searchId}
        />
      </div>

      {/* Dialog that pops up when data is retrieved (or invalid ID) */}
      <PercentOutput visible={visible} setVisible={setVisible} submission={submission} />

      {/* Tests */}
      <CompanyTest />
      <ScoresTest />
    </div>
  );
}

export default withAuthenticator(App)
