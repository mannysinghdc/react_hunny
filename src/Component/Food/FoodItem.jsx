import { MDBBtn, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FoodContext } from '../../../store/Food-item';

const FoodItem = ({ item }) => {
    const [flag, setFlag] = useState(false)
    const { deleteFoodItem} = useContext(FoodContext)

    //Buy and cancel Functionility on key press
    const buyHandler = (val) => {
        setFlag(!flag)
        if (!flag) {
            alert(`${val} has been bought`)
        } else {
            alert(`${val} has been cancelled`)
        }
    }

    return (
        <>
            <MDBListGroupItem className={`p-2 ${flag && 'active'}`}>
                {item.elm}
                <MDBBtn size='sm' color={`${flag ? "danger" : "info"}`} style={{ float: 'right' }} onClick={() => buyHandler(item.elm)}>
                    {`${flag ? "Cancel" : "Buy"}`}
                </MDBBtn>
                <span title='Delete' className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-danger" style={{ cursor: 'pointer' }}>
                    <RxCross2 onClick={() => deleteFoodItem(item.id)} />
                </span>
            </MDBListGroupItem>

        </>
    )
}

export default FoodItem
