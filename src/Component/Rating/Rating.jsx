import { useState } from "react"


const Rating = () => {
    const [rating, setRating] = useState()
    const [hover, setHover] = useState(0)

    const starArr = new Array(5).fill()

    const ratingFuc = (i) => {
        setRating(i)
    }
    return (
        <>
            <div className="container text-center my-4">
                <h2>Star Rating</h2>
                <p>Please rating our services</p>
                <div className="fs-1 d-flex justify-content-center gap-3">
                    {
                        starArr.map((item, i) => (
                            <span key={i} style={{ cursor: 'pointer' }} onClick={() => ratingFuc(i + 1)} onMouseEnter={() => setHover(i + 1)}
                                onMouseLeave={() => setHover(0)} className={hover == 0 && i < rating || i < hover ? "text-danger" : "text-dark"}>&#9733;</span>
                        ))
                    }
                </div>

            </div>


        </>
    )
}

export default Rating
