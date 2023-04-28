import React from 'react';
import {publicRoutes} from "./routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const PublicRoutes = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, element}) =>
                <Route path={path} element={element} key={path} />
            )}
            <Route path='/*' element={<Navigate replace to={LOGIN_ROUTE} />} />
        </Routes>
    );
};

export default PublicRoutes;