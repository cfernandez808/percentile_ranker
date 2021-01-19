import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const {searchId, setSearchId} = props
  const classes = useStyles();
  const handleChangeText = (e) => {
    setSearchId(e.target.value)
  }
  return (
    <React.Fragment>
      <Container>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="user-id-input">Input the Candidate's ID:</InputLabel>
          <Input
            id="user-id-input"
            value={searchId}
            onChange={handleChangeText}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Container>
    </React.Fragment>
  )
}

export default InputForm;
