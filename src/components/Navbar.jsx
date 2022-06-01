import { useState } from 'react';

import { Pool, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          EFINSWIM
        </Typography>
        <Pool sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons
        // sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ w: 20, h: 20 }}
            src='https://images.pexels.com/photos/10975387/pexels-photo-10975387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={(e) => setOpenMenu(true)}
          />
        </Icons>
        <UserBox
          onClick={(e) => setOpenMenu(true)}
          // sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <Avatar
            sx={{ w: 20, h: 20 }}
            src='https://images.pexels.com/photos/10975387/pexels-photo-10975387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Typography variant='span'>Andrii</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='basic-menu'
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
