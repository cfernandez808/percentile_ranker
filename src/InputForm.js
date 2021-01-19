import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    display: 'flex'
  },
}));

const InputForm = (props) => {
  const {userId, setUserId, visible, setVisible} = props
  const classes = useStyles();
  const handleChangeText = (e) => {
    setUserId(e.target.value)
  }
  const handleSubmit = (e) => {
    setVisible(!visible)
  }
  return (
    <React.Fragment>
      <Container>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="user-id-input">Input the Candidate's ID:</InputLabel>
          <Input
            id="user-id-input"
            value={userId}
            onChange={handleChangeText}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
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

export default InputForm;
