import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import NavBarCartIcon from './NavBarCartIcon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';

    
export default function ResponsiveAppBar  ()  {
    const categories = ["Remeras","Pantalones","Camperas","Medias"];

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar 
            position="static"
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
                Clothing Store
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
                        <MenuItem >
                            <Typography textAlign="center" as ={Link} to={`/allProducts`} 
                            sx={{textDecoration:'none', color:'black',':hover':{color:'black'}}}
                            >
                                Ver Productos
                            </Typography>
                        </MenuItem>
                        <Divider/>
                        
                        {categories.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" as ={Link} to={`/category/${page}`} 
                            sx={{textDecoration:'none', color:'black',':hover':{color:'black'}}}
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
                    Clothing Store
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
                {/* Cart Icon */}
                <NavBarCartIcon/>
            
            </Toolbar>
            </Container>
        </AppBar>
    );
};



