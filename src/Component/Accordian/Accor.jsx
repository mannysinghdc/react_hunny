import { data } from "./data"   // Accodion and show first value on mounting state
import Accordian from './Accordion'

const Accor = () => {
    document.title = "Accordion"
    return (
        <>
            <div className="container text-center my-4">
                <h1>Accordion </h1>
                <div className="row" >
                    <div className="col-md-6 mx-auto">
                        {
                            data.map((item, i) => (
                                <Accordian key={i} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accor
