import React, { useContext,useEffect } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Context } from '../../Context/CartContext';
import { Badge,Popover,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBarCartHover from './NavBarCartHover';

export default function CartWidget() {
    let {totalQuantity,getQuantity,carrito} = useContext(Context);
    
    useEffect(() => {
        getQuantity();
    }, [carrito]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    
    return (
    <>
            
            <IconButton as={Link} to={'/cart'}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{ pr: 3,color:'black',p: 2,mr: 2, 
                textDecoration:'none',display:'flex',alignItems:'center',
                ':hover':{color:'black'}}}>
                <Badge color="secondary" badgeContent={totalQuantity}>
                <ShoppingCartRoundedIcon />
                </Badge>
            </IconButton>
            <Popover
                id="mouse-over-popover"
                sx={{
                pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <NavBarCartHover/>
            </Popover>
    </>
    );
}