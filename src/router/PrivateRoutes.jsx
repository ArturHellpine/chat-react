import React from 'react';
import {privateRoutes} from "./routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {CHAT_ROUTE} from "../utils/consts";

const PrivateRoutes = () => {
    return (
        <Routes>
            {privateRoutes.map(({path, element}) =>
                <Route path={path} element={element} key={path} />
            )}
            <Route path='/*' element={<Navigate replace to={CHAT_ROUTE} />} />
        </Routes>
    );
};

export default PrivateRoutes;