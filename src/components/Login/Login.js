import React from "react";
import {useHistory} from "react-router-dom";

function Login ({toggleAuth}) {
    const history = useHistory();

    function nextPage (){
        history.push('/blogs')
        toggleAuth(true)
    }

    return (
        <div>
            <button type="button" onClick={nextPage}>Login</button>
        </div>
    )
}

export default Login;