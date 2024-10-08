import { MDBBtn } from 'mdb-react-ui-kit'    // Bg color2 changer
import { useContext, useState } from 'react'
import { MdInvertColors } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { ColorContext } from '../../../store/Color-Item';


const Color2 = () => {
    const [bg, setBg] = useState("HoneyDew")
    const navigate = useNavigate()
    const { setFlag } = useContext(ColorContext)

    const colorArr = ["red", 'yellow', 'pink', 'olive', 'orange', 'aqua', 'red', 'black', 'blue', 'violet', 'Lime']

    //Rnadom color pick function
    const randomColor = () => {
        const index = Math.floor(Math.random() * colorArr.length)
        setBg(colorArr[index])
    }
   document.title="Counter2"
    return (
        <>
            <div className='text-center' style={{ backgroundColor: bg, height: "90.7vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Color Project 2 button link  & back functionility is done by use -1 in navigate*/}
                <MDBBtn tag='a' title='Color1' color='none' style={{ color: 'Cyan', fontSize: "30px", position: "fixed", top: "50px", right: "15px" }} onClick={() => { navigate(-1), setFlag(false) }}>
                    <MdInvertColors />
                </MDBBtn>

                {/* button for change color */}
                <MDBBtn title='Double click to Original Color' rounded size='small' color='info' onClick={randomColor} onDoubleClick={() => { setBg("HoneyDew"), alert("Origal color") }}>{bg == "HoneyDew" ? 'Change Color' : bg}</MDBBtn>


            </div>

        </>
    )
}

export default Color2