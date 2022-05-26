import { useEffect, useState } from "react";

const useAdmin = user => {
    const [adminLoading, setAdminLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://sonic-techland-server.herokuapp.com/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])
    return [admin, adminLoading];
};

export default useAdmin;