

import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import methods from '../../backend';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password:'',
        verifypassword:'',
        registered: false
    }

textFieldHandler = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
}    

submitHandler = () => {
        
        const {firstName, lastName, userName, password, verifypassword} = this.state;
          if(firstName && lastName && userName && password.length!==0)
             {if(password === verifypassword)
                {
                 this.props.signUp();
                    methods.save(this.state).then(
                      res => { 
                          console.log(res.data)
                          
                      }
                  )
                  .catch(error =>{ 
                      console.log(error.response.data.message);
                      
                  })
                
                }
               // else {console.log('password different')}
            }

        else {console.log('err')}

        
}

render (){
    
  const {classes} = this.props

  if (this.props.register){return <Redirect to="/logging"/>}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required = {true}
                fullWidth
              //  id="firstName"
                label="First Name"
                onChange ={this.textFieldHandler}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
               // id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange ={this.textFieldHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
               // id="userName"
                label="User Name"
                name="userName"
                autoComplete="uname"
                onChange ={this.textFieldHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
                name="password"
                label="Password"
                type="password"
               // id="password"
                autoComplete="current-password"
                onChange ={this.textFieldHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
                name="verifypassword"
                label="Verify Password"
                type="password"
                //id="verify_password"
                autoComplete="verify-current-password"
                onChange ={this.textFieldHandler}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.submitHandler}
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
}

const mapStateToProps = state =>{
    return {
        register : state.registered
    };
}

const mapDispatchToProps = dispatch => {
  return {
      signUp: () => dispatch({type: 'SIGNUP'})
         }
}

const Registration = connect(mapStateToProps, mapDispatchToProps)(SignUp)
export default withStyles(useStyles, { withTheme: true })(Registration);