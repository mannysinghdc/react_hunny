import { MDBInput } from 'mdb-react-ui-kit'
import { useContext } from 'react'
import { FoodContext } from '../../../store/Food-item'

const AddFood = () => {
    const {onKeyDownAdd}=  useContext(FoodContext)
   
  return (
    <div className='my-4'>
       <MDBInput label="Add Food" id="form1" type="text" placeholder='Enter your food here' onKeyDown={onKeyDownAdd} />
    </div>
  )
}

export default AddFood
