import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { ColorContext } from '../../store/Color-Item';
import { TextCounterContext } from '../../store/Text-Coounter-Item';

const DrawerCmpt = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { mode, setMode } = useContext(ColorContext)
  const { removeBgColor } = useContext(TextCounterContext)

  const listItem = [
    { route: 'Color', icon: <i className="fa-solid fa-house"></i> },
    { route: 'Todo', icon: <i className="fa-solid fa-table-list"></i> },
    { route: 'Food', icon: <i className="fa-solid fa-utensils"></i> },
    { route: 'Rating', icon: <i className="fa-solid fa-star"></i> },
    { route: 'Curd', icon: <i className="fa-solid fa-book"></i> },
    { route: 'TextCounter', icon: <i className="fa-solid fa-text-height"></i> },
    { route: 'News', icon: <i className="fa-solid fa-newspaper"></i> }

  ]

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigateLink = (text) => {
    removeBgColor()
    if (text === "TextCounter" && mode == "dark" && location.pathname === "/textcounter") {
      setMode("textBg")
    }
    navigate(text.toLowerCase())

  }

  // useEffect(() => {
  //   document.querySelector("body").className = mode
  // }, [mode])

  const DrawerList = (
    <Box sx={{ width: 155 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {listItem.map((text, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.route} onClick={() => navigateLink(text.route)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} color="action" style={{ marginInline: "10px" }} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
export default DrawerCmpt