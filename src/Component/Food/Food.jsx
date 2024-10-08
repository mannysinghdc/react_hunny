import { MDBTypography } from 'mdb-react-ui-kit';
import Container from './Container'
import FoodList from './FoodList'
import AddFood from './AddFood';
import FoodContextProvider from '../../../store/Food-item';
import FoodMsg from './FoodMsg';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from 'react-router-dom';

const Food = () => {
    const navigate = useNavigate();
    document.title = "Food App"
    return (
        <>
            <div className='container mt-2' style={{position:"fixed", cursor:"pointer", color:"gray"}}>
                <RestaurantIcon onClick={()=>navigate("/foodweb/home/searchfood")}/>
            </div>
            <figure className='text-center my-4'>
                <MDBTypography className='text-muted' variant='h2' tag='em'>Order your meal</MDBTypography>
            </figure>
            <FoodContextProvider>
                <Container>
                    <AddFood />
                    <FoodMsg />
                    <FoodList />
                </Container>
            </FoodContextProvider>
        </>
    )
}

export default Food
