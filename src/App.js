import React, {useState} from 'react'
import Navbar from './Components/Main/Navbar';
import InputForm from './Components/Main/InputForm';
import SubmitBtn from './Components/Main/SubmitBtn';
import PercentOutput from './Components/Main/PercentOutput';
import Background from './Components/Main/Background';

import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [searchId, setSearchId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [submission, setSubmission] = useState(0)

  return (
    <div>
      <Navbar />
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
      <PercentOutput visible={visible} setVisible={setVisible} submission={submission} />
    </div>
  );
}

export default withAuthenticator(App)
