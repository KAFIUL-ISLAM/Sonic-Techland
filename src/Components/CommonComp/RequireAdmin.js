import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from '../../Hooks/useAdmin';
import LoadPage from '../Spinner/LoadPage';

const RequiredAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <LoadPage></LoadPage>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAdmin;