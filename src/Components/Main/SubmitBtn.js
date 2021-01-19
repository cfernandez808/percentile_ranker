import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  alignment: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn : {
    backgroundColor: '#3D73A3',
    color: 'white'
  }
}));

/* Submits the Candidate's ID */
const SubmitBtn = (props) => {
  const classes = useStyles();
  const {setSubmission, setVisible, visible, searchId} = props
  const handleSubmit = () => {
    setSubmission(searchId)
    setVisible(!visible)
  }
  return (
    <React.Fragment>
      <Container className={classes.alignment} component="div">
        <Button
          className={classes.btn}
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
