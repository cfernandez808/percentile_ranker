import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const SubmitBtn = (props) => {
  const {setSubmission, setVisible, visible, searchId} = props
  const handleSubmit = () => {
    setSubmission(searchId)
    setVisible(!visible)
  }
  return (
    <React.Fragment>
      <Container component="div">
        <Button
          onClick={handleSubmit}
          variant="contained"
        >
          Get Percentile Ranks
        </Button>
      </Container>
    </React.Fragment>
  )
}

export default SubmitBtn;
