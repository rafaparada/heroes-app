import {PropTypes} from 'prop-types';
import {Route,Redirect} from 'react-router-dom';

const PublicRoutes = ({isAuthenticated,component:Component,...rest})=>{
    return (
        <Route {...rest} component = {(props)=>((!isAuthenticated) ? <Component {...props}/>:<Redirect to="/" />)} />
    );
}
PublicRoutes.propTypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}

export default PublicRoutes;