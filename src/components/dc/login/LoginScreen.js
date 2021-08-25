const LoginScreen = () => {
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
                            <input type="text" name="usuario" className="form-control" />
                            Password:
                            <input type="password" name="password" className="form-control" />
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Entrar</button>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default LoginScreen
