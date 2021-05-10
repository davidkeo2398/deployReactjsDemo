import {withRouter} from 'react-router-dom'
import NavbarComponent from './NavbarComponent/NavbarComponent'
import {makeStyles} from '@material-ui/core/styles'
 
const Home = withRouter(({location, history}) =>{
    const useStyles = makeStyles((theme) => ({
        root: {
            
        }
    }))
    return(
        <div>
            <NavbarComponent></NavbarComponent>
        </div>
    )
})

export default Home