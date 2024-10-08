import { useContext } from "react";
import { TextCounterContext } from "../../../store/Text-Coounter-Item";

const Alert = () => {
    const { alert } = useContext(TextCounterContext)
    //Capitalize function
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div style={{height:'45px'}}>
            {
                alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalizeFirstLetter(alert.type)}</strong>:  <strong>{alert.msg}</strong>
                </div>
            }

        </div>
    )
}

export default Alert 