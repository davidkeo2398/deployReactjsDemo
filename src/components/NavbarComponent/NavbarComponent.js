import { withRouter } from "react-router";
import { useMediaQuery } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/LoginAction";

var screenH = window.screen.height;
var screenW = window.screen.width;

const phone = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
  },
}),
);


const Navbar = withRouter(({ location, history }) => {
  const classes = phone()
  const matches = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch()
  // const status = useSelector(state => state.LoginReducer.status)
  // const status = localStorage.getItem('status')
  const handleClick = () => {
    console.log(screenW + ' : ' + screenH)
    // console.log(status)
  }
  const handleLogoutClick = () => {
    
    const action = logout()
    dispatch(action)
    document.location.reload(true)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button onClick={handleLogoutClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
})

export default Navbar