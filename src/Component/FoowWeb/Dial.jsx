
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share'
import HomeIcon from '@mui/icons-material/Home'
import { useContext } from 'react';
import { ColorContext } from '../../../store/Color-Item';
import { useNavigate } from 'react-router-dom';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <HomeIcon />, name: 'Home' },
];


const Dial = () => {
    const { setShowCmpt } = useContext(ColorContext)
    const navigate = useNavigate()

    const actionHanlder = (val) => {   // naviagte to home page
        if (val == "Home") {
            setShowCmpt("")
            navigate("/")
        }
    }
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'absolute', bottom: 0, right: 10 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => actionHanlder(action.name)}
                        sx={{ color: "red" }}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

export default Dial

