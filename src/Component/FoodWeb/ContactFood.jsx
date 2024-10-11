import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import { Box } from '@mui/material';

const ContactFood = () => {
    return (
        <>
            <div className="container my-3">
                <h2 style={{ fontFamily: "fantasy" }}>Contact to our Restaurant</h2>
                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium labore omnis dolore, explicabo doloribus est impedit obcaecati ex pariatur a, commodi non? Sapiente, ducimus accusantium.</p>
            </div>
            <Box sx={{ m: 3, width: "600px" ,ml:9, "@media (max-width: 600px)":{width:"300px", ml:2}}}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' sx={{ bgcolor: "black", color: "white" }}>Contact Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red" }} /> 1800-00-1000 (toll-free)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "skyblue" }} /> tasty_app@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <PhoneIcon sx={{ color: "green" }} /> +91 9999-9999-99
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default ContactFood