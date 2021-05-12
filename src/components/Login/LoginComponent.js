import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch} from 'react-redux'
import { Button } from '@material-ui/core'
import { login } from '../../redux/Actions/LoginAction';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    txt: {
        fontSize: '14px',
        backgroundColor: 'rgba(255, 238, 251, 0.6)',
    },
    btn: {
        backgroundColor: 'rgba(115, 180, 255, 1.0)',
        color: 'black',
        fontSize: '14px',
    },
}));

const Login = () => {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    

    const handleChange = (e) => {
        if (e.target.id === 'userInp') {
            setName(e.target.value)
        }
        if (e.target.id === 'passInp') {
            setPass(e.target.value)
        }
        // console.log(userInfo[0].userName)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(name + ' '+ pass)
        const newUser = {
            userName: name,
            passWord: pass,
        }
        const action = login(newUser)
        dispatch(action)
        // console.log(userNameInp + ' ' + passWordInp)
    }

    return (
        <form onSubmit={handleLogin} className={classes.root} noValidate autoComplete="off">
            <TextField value={name} onChange={handleChange} className={classes.txt} id="userInp" label="User name" variant="filled" />
            <TextField type='password' value={pass} onChange={handleChange} className={classes.txt} id="passInp" label="Password" variant="filled" />
            <Button type='submit' className={classes.btn} variant="contained">
                Login
            </Button>
        </form>
    )
}

export default Login