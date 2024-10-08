import { MDBBtn } from 'mdb-react-ui-kit'    // Bg color changer
import { useContext, useState } from 'react'
import { IoIosColorPalette } from "react-icons/io";
import { useNavigate, Outlet } from 'react-router-dom';
import { ColorContext } from '../../../store/Color-Item';


const Color = () => {
    const [bg, setBg] = useState("HoneyDew")
    const navigate = useNavigate()
    const { flag, setFlag } = useContext(ColorContext)

    const colorArr = ["red", 'yellow', 'pink', 'olive', 'orange']

   document.title="Counter"
    return (
        <>
            {
                !flag && <div className='text-center' style={{ backgroundColor: bg, height: "90.7vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* Color Project 2 button link */}
                    <MDBBtn tag='a' title='Color2' color='none' style={{ color: 'Cyan', fontSize: "30px", position: "fixed", top: "50px", right: "15px" }} onClick={() => { navigate("/color/color2"), setFlag(true) }}>
                        <IoIosColorPalette />
                    </MDBBtn>

                    {/* button for change color */}
                    {
                        colorArr.map((item, i) => (
                            <MDBBtn key={i} title='Double click to Original Color' className='mx-1' rounded size='small' color='info' onClick={() => setBg(item)} onDoubleClick={() => { setBg("HoneyDew"), alert("Origal color") }}>{item}</MDBBtn>
                        ))
                    }

                </div>
            }
            <Outlet />

        </>
    )
}

export default Color
