import React, {useState} from 'react'
import ComsPercent from './ComsPercent';
import CodingPercent from './CodingPercent';
import Navbar from './Navbar';
import InputForm from './InputForm';




function App() {
  const [userId, setUserId] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Navbar />
      <InputForm
        userId={userId}
        setUserId={setUserId}
        visible={visible}
        setVisible={setVisible}
      />
      <ComsPercent visible={visible}/>
      <CodingPercent />
    </div>
  );
}

export default App;
