import { useEffect, useState } from "react";

const useToken = user => {

    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://sonic-techland-server.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const jwtToken = data.token;
                    localStorage.setItem('accessToken', jwtToken);
                    setToken(jwtToken);
                })
        }
    }, [user])

    return [token];
};

export default useToken;