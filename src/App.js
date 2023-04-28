import React, {useContext} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthProvider from "./router/AuthProvider";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

const App = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if(loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AuthProvider />
        </BrowserRouter>
    );
};

export default App;