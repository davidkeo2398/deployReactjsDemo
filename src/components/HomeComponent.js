import { withRouter } from 'react-router-dom'
import NavbarComponent from './NavbarComponent/NavbarComponent'
import { makeStyles } from '@material-ui/core/styles'

import {useSelector } from 'react-redux'

import LoginComponent from './Login/LoginComponent'
import UserInfo from '../data/InformationData'
const Home = withRouter(({ location, history }) => {
    const useStyles = makeStyles((theme) => ({
        root: {

        }
    }))

    const userNameInp = useSelector(state => state.LoginReducer.userNameInp)
    const passWordInp = useSelector(state => state.LoginReducer.passWordInp)
    const { userName, passWord } = UserInfo[0]
    return (
        <div>
            
            {userName === userNameInp && passWord === passWordInp ?
                <NavbarComponent></NavbarComponent> :
                <LoginComponent></LoginComponent>
            }


        </div>
    )
})

export default Home