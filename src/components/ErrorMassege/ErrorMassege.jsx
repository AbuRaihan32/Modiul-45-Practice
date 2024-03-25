import { useNavigate, useRouteError } from "react-router-dom";

const ErrorMassege = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const goHomeHandler = () =>{
        navigate('/')
    }
    return (
        <div>
            <h1 className="text-4xl">Oops!!!</h1>
            <h1>Error Massage : {error.error.message}</h1>
            <h1>statusText : {error.statusText}</h1>
            <h1>status : {error.status || error.error.message}</h1>
            {
                error.status === 404 && <div>
                    <p>page not Found </p>
                    <button className="btn" onClick={goHomeHandler}>go to home</button>

                </div>
            }
        </div>
    );
};

export default ErrorMassege;