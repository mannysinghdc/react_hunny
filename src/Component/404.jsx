import image from '../../public/404.avif'
const NotFoundPage = () => {
    return (
        <div className='container'>
            <img src={image} className="img-fluid img-thumbnail"  alt="image" style={{height:"90vh"}}/>
        </div>
    )
}

export default NotFoundPage
