import AppRouter from "./routers/AppRouter";
import { AuthContext } from "./context/AuthContext";
import { useReducer} from "react";
import authReducer from "./authReducer/authReducer";
const init = () => {
    return JSON.parse(localStorage.getItem('user'))||{logged:false};
}

const HeroesApp =()=> {
    const [user,dispatch] = useReducer(authReducer,{},init);
    return (
        <AuthContext.Provider value={{user,dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    );
}

export default HeroesApp;
