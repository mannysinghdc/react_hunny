import { useContext } from "react"
import { TextCounterContext } from "../../../store/Text-Coounter-Item"


const BgButton = () => {
    //Bg changer on button click
    const { removeBgColor } = useContext(TextCounterContext)
    
    const templateBgColor = (cls) => {
        removeBgColor()
        document.body.classList.add("bg-" + cls)
    }
    return (
        <>
            <div className='d-flex' style={{ position: "fixed", bottom: 0 }}>
                <div className='bg-info rounded' style={{ height: "20px", width: "20px", cursor: "pointer", border: '1px solid' }} onClick={() => templateBgColor("info")}></div>
                <div className='bg-success rounded mx-1' style={{ height: "20px", width: "20px", cursor: "pointer", border: '1px solid' }} onClick={() => templateBgColor("success")}></div>
            </div>
        </>
    )
}

export default BgButton
