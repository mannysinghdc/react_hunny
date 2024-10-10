import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShopCreate = () => {
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const product = Object.fromEntries(formData.entries())


        if (!product.name || !product.category || !product.price || !product.date || !product.image.name) {
            alert("Please enter all detail")
            return
        }

        try {
            fetch(`http://localhost:3000/products`, {
                method: "POST",
                body: formData
            })
                .then((res) => {
                    if (res.ok) {
                        return (
                            res.json(),
                            alert("Product created successfully!"),
                            navigate("/shopping/product")
                        )
                    }

                })

        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <div className="container my-1">
                <div className="row">
                    <div className='col-md-8 mx-auto rounded border p-4'>
                        <h3 className='text-center mb-4'>Create Product</h3>

                        <form onSubmit={submitHandler}>
                            <div className='row mb-4'>
                                <label className="col-md-4 col-form-label">Name</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" name='name' />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <label className="col-md-4 col-form-label">Price</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" name='price' />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <label className="col-md-4 col-form-label">Category</label>
                                <div className="col-md-8">
                                    <select className="form-select" name='category'>
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
                                <label className="col-md-4 col-form-label">Image</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="file" name='image' />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <label className="col-md-4 col-form-label">Date</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="date" name='date' />
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCreate