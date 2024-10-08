import { useContext, useState } from "react"   //History pending
import { ColorContext } from "../../../store/Color-Item"
import style from './Calsi.module.css'

const Calsi = () => {
    const [display, setDisplay] = useState("")
    const [history, setHistory] = useState("")

    console.log(history)
    //Buttons Value 
    const buttonNames = ["(", ")", "%", "AC", "1", "2", "3", "*", "4", "5", "6", "-", "7", "8", "9", "+", "0", ".", "=", "/", "Back"]

    const { show } = useContext(ColorContext) // to render 2 calcultor UI

    const buttonHandler = (val) => {
        console.log(val)
        if (val == "AC") {
            setDisplay("")
        } else if (val == "=" && display !== "" || val == "." && display.includes(".")) {
            const result = eval(display)
            setDisplay(String(result))  // this give me number value that is why i used toString()
        } else {
            setDisplay(display.concat(val))
        }
        if (val == "Back") {
            setDisplay(display.slice(0, -1))
        }

    }

    // const historyFuc = () => {
    //   const newItem={...display}
    //     console.log(newItem)

    // }

    document.title = "Calsi App"

    return (
        <>
            {
                show && <div className={`${style.mainContainer} container`}>
                    <input type="text" className={style.input} value={display} readOnly />

                    <div className={style.buttonBox}>
                        {
                            buttonNames.map((item, i) => (
                                <button key={i} className={style.btn} onClick={() => buttonHandler(item)}>{item}</button>
                            ))
                        }
                        <button className={style.btn}>Log</button>
                    </div>
                    {
                        !history.length === 0 ? <input type="text" value={history} readOnly /> : null
                    }

                </div >
            }
            {/* {
                history.map((history, i) => (
                    <p key={i}>{history}</p>
                ))
            }
            {
                history.length === 0 ? "no record" : <p>{history}</p>
            }
            <button onClick={historyFuc}>history</button> */}

        </>
    )
}

export default Calsi