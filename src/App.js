import React, {useState} from 'react'
import Navbar from './Navbar';
import InputForm from './InputForm';
import SubmitBtn from './SubmitBtn';
import PercentOutput from './PercentOutput';

import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [searchId, setSearchId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [submission, setSubmission] = useState(0)

  return (
    <div>
      <Navbar />
      <br /> <br />
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
      <PercentOutput visible={visible} setVisible={setVisible} submission={submission} />
    </div>
  );
}

export default withAuthenticator(App)
