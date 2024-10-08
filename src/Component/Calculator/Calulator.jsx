import { useState } from 'react'
import style from './Calulator.module.css'
import { MDBTypography } from 'mdb-react-ui-kit'
import { AiFillCalculator } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ColorContext } from '../../../store/Color-Item';

const Calulator = () => {
    const [display, setDisplay] = useState("")
    const { show, setShow } = useContext(ColorContext)
    const navigate = useNavigate()

    const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]

    // Manipulation of digits
    const clickHandler = (val) => {
        if (val === "C") {
            setDisplay("")
        } else if (val === "=" && display !== "") {
            const result = eval(display)
            setDisplay(result)
        } else {
            const newVal = display + val
            setDisplay(newVal)
        }

    }
    document.title = "Calculator App"

    return (
        <>

            <AiFillCalculator style={{ color: "gray", fontSize: "30px", cursor: "pointer", margin: "0px 10px" }} onClick={() => { navigate("/calculator/calsi"), setShow(!show) }} />
            <figure className='text-center mt-3'>
                <MDBTypography className='text-muted' variant='h2' tag='em'>Calculator</MDBTypography>
            </figure>
            {
                !show && <div className={style.calbox}>
                    <input type="text" value={display} readOnly className={style.input} />
                    {/* this is diffrent approach to access class is array notation */}
                    <div className={style['btn-group']}>
                        {
                            buttonNames.map((item, i) => (
                                <button key={i} className={`${style.btnBox} btn`} onClick={() => clickHandler(item)}>{item}</button>
                            ))
                        }
                    </div>
                </div>

            }
        </>

    )
}

export default Calulator
