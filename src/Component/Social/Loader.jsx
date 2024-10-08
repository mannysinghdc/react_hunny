import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

const Loader=()=> {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center" ,margin:"10px 0px"} }>
      <CircularProgress size="30px" />
    </Box>
  );
}


export default Loader