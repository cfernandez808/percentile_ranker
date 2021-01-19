import React, {useState} from 'react'
import Navbar from './Navbar';
import InputForm from './InputForm';
import SubmitBtn from './SubmitBtn';
import PercentOutput from './PercentOutput';




function App() {
  const [searchId, setSearchId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [submission, setSubmission] = useState(0)


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
      <PercentOutput visible={visible} setVisible={setVisible} submission={submission} />
    </div>
  );
}

export default App;
