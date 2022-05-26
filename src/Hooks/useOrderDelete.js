const useOrderDelete = () => {

    const orderDelete = id => {

        const url = `https://sonic-techland-server.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

            })

    }
    return orderDelete;
}

export default useOrderDelete;