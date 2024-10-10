import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const [intialData, setIntialData] = useState()
    const navigate = useNavigate()
    const { id } = useParams()


    //Prefill data based on id
    const getProductDataId = () => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(result => setIntialData(result))
    }

    //submit 
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const product = Object.fromEntries(formData.entries())

        if (!product.name || !product.category || !product.price) {
            alert("Please enter all detail")
            return
        }

        try {
            fetch(`http://localhost:3000/products/${id}`, {
                method: "PATCH",
                body: formData
            })
                .then((res) => {
                    if (res.ok) {
                        return (
                            res.json(),
                            alert("Product update successfully!"),
                            navigate("/shopping/product")
                        )
                    }

                })

        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getProductDataId()
    }, [])

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className='col-md-8 mx-auto rounded border p-4'>
                        <h2 className='text-center mb-4'>Edit Product</h2>

                        <div className='row mb-4'>
                            <label className="col-md-4 col-form-label">ID</label>
                            <div className="col-md-8">
                                <input className="form-control-plaintext" readOnly defaultValue={id} style={{ fontSize: "15px" }} />
                            </div>
                        </div>
                        {
                            intialData &&
                            <form onSubmit={submitHandler}>
                                <div className='row mb-4'>
                                    <label className="col-md-4 col-form-label">Name</label>
                                    <div className="col-md-8">
                                        <input className="form-control" name='name' defaultValue={intialData.name} />
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <label className="col-md-4 col-form-label">Price</label>
                                    <div className="col-md-8">
                                        <input className="form-control" name='price' defaultValue={intialData.price} />
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <label className="col-md-4 col-form-label">Category</label>
                                    <div className="col-md-8">
                                        <select className="form-select" name='category' defaultValue={intialData.category}>
                                            <option value="Other">Other</option>
                                            <option value="Computer">Computer</option>
                                            <option value="Laptop">Laptop</option>
                                            <option value="Laptop">Mobile</option>
                                            <option value="Laptop">Camera</option>
                                            <option value="Laptop">Printers</option>
                                            <option value="Laptop">Accessories</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <div className="offset-4 col-md-8">
                                        <img src={`http://localhost:3000/images/${intialData.product_image}`} alt="image" height={150} />
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <label className="col-md-4 col-form-label">Image</label>
                                    <div className="col-md-8">
                                        <input className="form-control" type="file" name='image' />
                                    </div>
                                </div>

                                <div className='row mb-4'>
                                    <label className="col-md-4 col-form-label">Create At</label>
                                    <div className="col-md-8">
                                        <input className="form-control-plaintext" name='date' defaultValue={new Date(intialData.date).toLocaleDateString()} readOnly style={{ fontSize: "15px" }} />
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <div className='offset-4 col-md-4 d-grid'>
                                        <button className='btn btn-primary btn-sm'>submit</button>
                                    </div>
                                    <div className='col-md-4 d-grid'>
                                        <Link className="btn btn-primary" to="/shopping/product" role="button">Cancel</Link>
                                    </div>
                                </div>

                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct