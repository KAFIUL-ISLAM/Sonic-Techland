const useSetAccessToken = () => {

    const setAccessToken = async email => {
        
        await fetch('http://localhost:5000/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
            })
    }
    return setAccessToken;
};

export default useSetAccessToken;

