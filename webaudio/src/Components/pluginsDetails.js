import React ,{Component} from 'react';
import methods from '../backend' ;
//import {connect} from 'react-redux';
//import {Redirect} from 'react-router-dom';
//import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
//import Avatar from '@material-ui/core/Avatar';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
//import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
//import div from '@material-ui/core/div';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// eslint-disable-next-line
//import ButtonBase from '@material-ui/core/ButtonBase';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import InsertCommentRoundedIcon from '@material-ui/icons/InsertCommentRounded';
import logo from '../images/img2.png';
import { blue, green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import AddCommentIcon from '@material-ui/icons/AddComment';



const useStyles = theme => ({

  label:{
       color : "#3f51b5",
  },
  media: {

    paddingTop: '56.25%', // 16:9
    margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
  
    align: 'center'

  },
  button: {
    margin: theme.spacing(2),
    textAlign: 'center',

  
  },
    root: {
      flexGrow: 1,
      maxWidth: 345,
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
  
  },
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
  });
  
 
  
 

class Details extends Component {
  constructor(props){
    super(props)
    this.state = {
        vote: 0,
        isTested: false,
        idCommented: false,
        comment:'',
        pluginDetail: {},
    }
    this.getData = this.getData.bind(this); 
    //this.afficherCommentaire = this.afficherCommentaire.bind(this); 
  }
  componentWillMount(){this.getData() }
    getData (){
    methods.getDetails('5e514db566ced65bf8d8e123').then((data)=>{
      //console.log(data)
      this.setState({pluginDetail:data.data.plugin});
    })
  }
 

  handleComment = (event) =>{
    this.setState({comment: event.target.value});
  };
 
  handleAdd = ()

  
render (){
  
  //console.log(this.state.pluginDetail)
  const plugins = this.state.pluginDetail

  const {classes} = this.props
  return (   
   // <Container fixed>    
    //<div>
    <React.Fragment>
      <Container maxWidth="sm">
        <div container spacing={1}>
        <div style={{ marginTop: 40 }}>
          
          
    
              <CardMedia 
                  className={classes.media}
                  image = {logo}
                  title="plugin"
              />
                <div  item xs >          
                  <Button
        
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      endIcon={<PlayArrowRoundedIcon />}
                      > 
                      Tester 
                  </Button>
                </div>

          
        

            <Typography align='left' gutterBottom variant="h4">
                {plugins.nom} <Rating name="rating" value={this.state.vote} defaultValue={0} 
                
                size="meduim"  />
            </Typography>
            <Typography  align='left' gutterBottom variant="body2">
            <span className={classes.label} >Author:</span>  {plugins.id_user}
            </Typography>
            <Typography  align='left' gutterBottom variant="body2">
                <span className={classes.label} >Vendor:</span>  {plugins.vendeur}
               
            </Typography>
            <Typography align='left' gutterBottom variant="body2">
            <span className={classes.label} >Category:</span> {plugins.categorie}
            </Typography>
            <Typography  align='left' gutterBottom variant="body2">
            <span className={classes.label} >Home page:</span> {plugins.homePage}
            </Typography>
            <Typography  align='left' gutterBottom variant="body2">
            <span className={classes.label} >Open source:</span>{(plugins.opensSource)? 'Yes': "No" }
            </Typography>
        
          </div> 
      </div>

      <div container style={{ marginTop: 40 }}>
        <div item xs>
            <Typography align='left' gutterBottom variant="h6">
                Description
            </Typography>
            <Typography align='left' gutterBottom variant="body1">
            {plugins.description}
            </Typography>
          </div>
        </div>
      <div container style={{ marginTop: 50 }}>
      <div style={{ marginTop: 15 }}>
          <Typography align='left' gutterBottom variant="h6">
                  Commentaire
          </Typography>
      
        <div container spacing={2}>
            {(plugins.commentaires) ? plugins.commentaires.map(com=>
               ( <div style={{ marginTop: 25}} > 
                   <Typography align='left' gutterBottom variant="body2" color="textSecondary">
                   <InsertCommentRoundedIcon /> {com.id_user} : {com.date}
                    </Typography>
                    <Typography align='left' gutterBottom variant="body1"  >
                      {com.commentaire}
                    </Typography>

    
                 </div>)
  
          ): null }
        
          <div  style={{ marginTop: 25 }} >  
            <TextField value={this.state.comment} align='left' style = {{width: 456}} id="outlined-basic"  label="Commentaire" variant="outlined" />
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              endIcon={<AddCommentIcon />}
            /> 
          </div>         
        </div>
        </div>
      </div> 
      
      </Container>
      </React.Fragment>
   
   
  );
}

}


export default withStyles(useStyles, { withTheme: true })(Details);