import { useEffect, useState } from 'react'

const Product = () => {
    const [data, setData] = useState([])

    const getProducts = () => {
        fetch("http://localhost:3004/products")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error()
            })
            .then(result => setData(result))
            .catch(error => alert("Unable to get data"))
    }

    useEffect(() => {
        getProducts()

    }, [])

    return (
        <>
            <div className="container">
                <h2 className="text-center">Product</h2>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary btn-sm me-2">Create</button>
                        <button type="button" class="btn btn-outline-primary btn-sm" onClick={getProducts}>Refresh</button>
                    </div>
                </div>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SNo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <img src={`http://localhost:3004/images/${item.image}`} alt="image" height={100} />
                                    </td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm me-1'>Delete</button>
                                        <button className='btn btn-primary btn-sm'>edit</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Product