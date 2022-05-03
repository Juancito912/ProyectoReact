import React from 'react';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

    const categories = ["Remeras","Pantalones","Camperas","Medias"];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function ResponsiveAppBar  ()  {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }; 
    return (
        <AppBar 
            position="sticky"
            sx={{bgcolor:'#d32f2f',
            color: '#000000'
            }}
            >
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    as={Link} to={'/'}
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ textDecoration:'none',
                    ':hover':{color:'white'},
                    color:'black', mr: 5,
                    display: { xs: 'none', md: 'flex'}}}
                >
                Chothing Store
                </Typography>
    
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu 
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{display: { xs: 'block', md: 'none'}}}
                    >
                        {categories.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" as ={Link} to={`/category/${page}`} 
                            sx={{textDecoration:'none', color:'black'}}
                            >
                            {page}
                        </Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Typography as={Link} to={'/'}
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                    textDecoration:'none', color:'black',
                    ':hover':{color:'white'}}}
                >
                    Chothing Store
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {categories.map((page) => (
                    <Button as ={Link} to={`/category/${page}`}
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'black',
                        display: 'block',
                        textDecoration:'none',
                        ':hover':{color:'white'}}}
                    >
                    {page}
                    </Button>
                    ))}
                </Box>
    
                <Box sx={{ flexGrow: 0}}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} as={Link} to={'/cart'}
                            sx={{ pr: 3,color:'black',p: 2,mr: 2, 
                            textDecoration:'none',display:'flex',alignItems:'center',
                            ':hover':{color:'black'}}}>
                            <CartWidget/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
};



