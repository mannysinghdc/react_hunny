import CurdContextProvider from "../../../store/Curd-Item"
import Create from "./Create"
import Read from "./Read"


const Curd = () => {
    return (
        <>
            <CurdContextProvider>
                <Create />
                <Read />
            </CurdContextProvider>
        </>
    )
}

export default Curd
