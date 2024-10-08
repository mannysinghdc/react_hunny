import './Container.css'

const Container = ({ children }) => {
    return (
        <div className='containerBox'>
            {children}
        </div>
    )
}

export default Container
