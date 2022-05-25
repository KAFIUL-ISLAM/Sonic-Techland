const useOrderDelete = () => {

    const orderDelete = id => {

        const url = `http://localhost:5000/orders/${id}`;
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