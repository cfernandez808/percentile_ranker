import React, {useState} from 'react'
import ComsPercent from './ComsPercent';
import CodingPercent from './CodingPercent';
import Navbar from './Navbar';
import InputForm from './InputForm';
import SubmitBtn from './SubmitBtn';




function App() {
  const [searchId, setSearchId] = useState(890);
  const [visible, setVisible] = useState(false);
  const [submission, setSubmission] = useState(890)


  console.log(submission)
  return (
    <div>
      <Navbar />
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
      { visible ?
      <ComsPercent submission={submission} /> : ''
      }
      { visible ?
      <CodingPercent submission={submission} /> : ''
      }
    </div>
  );
}

export default App;
