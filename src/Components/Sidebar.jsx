import DraftsIcon from '@mui/icons-material/Drafts';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
const Sidebar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} p={2}  sx={{display:{xs:"none",sm:"block"}}}>
      Sidebar
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
               <DraftsIcon/>
            </ListItemIcon>
          
          <ListItemText primary="Inbox"/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
