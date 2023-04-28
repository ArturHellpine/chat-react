import React, {useContext} from 'react';
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AuthProvider = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        user ?
        <PrivateRoutes />
            :
        <PublicRoutes />
    );
};

export default AuthProvider;