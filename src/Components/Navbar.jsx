import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
const StyledToolbar = styled(Toolbar)({

  display:"flex",
  justifyContent:"space-between"

})
const Search = styled(Box)(({theme})=>({
      backgroundColor:"white",
      padding:"0 10px",
      borderRadius:theme.shape.borderRadius,
      width:"40%"
}))
const Icons = styled("div")(({theme})=>({
   display:"none",
   gap:"20px",
   [theme.breakpoints.up("sm")]:{
    display:"flex"
   }
}))
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
   }
}))
const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Navbar</Typography>
          <Pets sx={{display:{xs:"block",sm:"none"}}}/>
          <Search><InputBase placeholder='search...'></InputBase></Search>
          <Icons>
            <Badge badgeContent={4} color='error'>
              <Mail/>
            </Badge>
            <Badge badgeContent={2} color='error'>
              <Notifications/>
            </Badge>
            <Avatar sx={{width:30,height:30}} src="https://wallpapers.com/images/hd/naruto-and-hinata-kissing-p2k5rfg6b0cw8m2c.webp"/>
          </Icons>
          <UserBox>
          <Avatar sx={{width:30,height:30}} src="https://wallpapers.com/images/hd/naruto-and-hinata-kissing-p2k5rfg6b0cw8m2c.webp"/>
          <Typography variant='span'>John</Typography>
          </UserBox>
          
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-positioned-button',
        }}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        open={true}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
        
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
