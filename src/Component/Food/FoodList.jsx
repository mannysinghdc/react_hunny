import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import FoodItem from './FoodItem';
import { useContext } from 'react';
import { FoodContext } from '../../../store/Food-item';

const FoodList = () => {
  const {food}=  useContext(FoodContext)
  
    return (
        <MDBContainer >
            <MDBListGroup style={{ minWidth: '22rem' }} light small>
                {
                    food.map((item,i) => (
                        <FoodItem key={i} item={item}/>
                    ))
                }

            </MDBListGroup>
        </MDBContainer>

    );
}
export default FoodList