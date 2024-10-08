import React from 'react'

const Card = ({ children }) => {
    return (
        <>
            <div className="card my-3" style={{ width: "30rem" }}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card
