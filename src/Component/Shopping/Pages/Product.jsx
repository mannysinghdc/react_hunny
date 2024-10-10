import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getProducts = () => {
        fetch("http://localhost:3000/products")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error()

            })
            .then(result => setData(result))
            .catch(error => alert("Unable to get data"))
    }

    const editHandler = (val) => {
        navigate(`/shopping/product/edit/${val}`)
    }


    //Delete Functionilty
    const deleteHanlder = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error()
                }
                getProducts()
            })
            .catch(() => {
                alert("Unable to delete!")
            })
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
                        <Link className="btn btn-primary btn-sm me-2" to="/shopping/product/create" role="button">Create</Link>
                        <button type="button" className="btn btn-outline-success btn-sm" onClick={getProducts}>Refresh</button>
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
                                        <img src={`http://localhost:3000/images/${item.product_image}`} alt="image" height={100} />
                                    </td>
                                    <td>{new Date(item.date).toLocaleDateString()}</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm me-1' onClick={() => deleteHanlder(item.id)}>Delete</button>
                                        <button className='btn btn-primary btn-sm' onClick={() => { editHandler(item.id) }}>edit</button>
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