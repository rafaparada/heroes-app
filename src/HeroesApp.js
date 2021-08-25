import AppRouter from "./routers/AppRouter";
import UserContext from "./context/UserContext";
import { useState } from "react";
const HeroesApp =()=> {
    const [user,setUser] = useState();
    return (
        <UserContext.Provider value={{user,setUser}}>
            <AppRouter />
        </UserContext.Provider>
    );
}

export default HeroesApp;
