import { useContext,useState } from "react";
import UserContext from "../../../context/UserContext";
const LoginScreen = ({history}) => {
    const {setUser}= useContext(UserContext);
    const [data,setData]=useState({user:'',password:''});
    const handleForm = e =>{
       const newData = {...data};
       newData[e.target.name] = e.target.value;
       setData(newData);
    }
    const autenticar = () =>{
        setUser(data);
        history.replace("/dc");
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header text-center">
                            AUTENTIFICACION
                        </div>
                        <div className="card-body">
                            Usuario:
                            <input type="text" onChange={handleForm} name="user" className="form-control" />
                            Password:
                            <input type="password" onChange={handleForm} name="password" className="form-control" />
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary" onClick={()=>autenticar()}>Entrar</button>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default LoginScreen
