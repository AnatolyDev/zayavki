import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const open = Boolean(anchorEl);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpenDrawer(open);
      };

    const sideList = () => (
      <div
        className='menu-list'
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>

          <NavLink to='/' style={{textDecoration: 'none', color: grey}}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary='Главная' style={{color: 'black'}}/>
            </ListItem>              
          </NavLink>

          <NavLink to='/catalog' style={{textDecoration: 'none', color: grey}}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary='Каталог' style={{color: 'black'}}/>
            </ListItem>              
          </NavLink>

          <Divider />

          {props.currentUser &&
            <NavLink to='/zayavki' style={{textDecoration: 'none', color: grey}}>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                <ListItemText primary='Заявки' style={{color: 'black'}}/>
              </ListItem>              
            </NavLink>
          }

        </List>

        
      </div>
    );
  
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className='header-main'>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                {sideList()}
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className='menu-button' color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className='header-title'>
                        Заголовок
                    </Typography>
                    {props.currentUser && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile {props.currentUser}</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                )}
                {!props.currentUser && (
                  <div>
                    <Button>
                      <NavLink to='/signin' style={{textDecoration: 'none'}}>
                        <ListItem button>
                          <ListItemText primary='Логин' style={{color: 'white'}}/>
                        </ListItem>              
                      </NavLink>
                    </Button>
                  </div>
                )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;