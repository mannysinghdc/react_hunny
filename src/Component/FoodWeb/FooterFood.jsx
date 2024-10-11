import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Dial from "./Dial";


const FooterFood = () => {
    return (
        <>
            <Box sx={{ textAlign: "center", bgcolor: 'gray' ,color:"white",p:3}}>
                <Box sx={{my:3, "& svg":{fontSize:"40px", cursor:"pointer",mr:1}, "& svg:hover":{color:"pink", transform:"translate('5px')", transition:"all 400ms",boxShadow: "1px -1px 11px 1px rgba(255,192,203,0.88)"}}}>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                </Box>
                <p>All right reserved &copy; 2024 Tasty_Food </p>
            </Box>
            <Dial/>
        </>
    )
}

export default FooterFood