import React, { useState } from "react";
import {Menu,MenuItem,Typography} from '@mui/material';
import {KeyboardArrowDown} from '@mui/icons-material'

export default function MenuComponent({menu}){
    //anchor for position
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

  const open = Boolean(anchorEl);

    return(
        <div className="items">
            {menu.children === undefined ?
                <div>
                    <Typography
                        fontFamily='Poppins'
                        fontWeight={'bold'}
                        >
                            {menu.name}
                    </Typography> 
                </div> :
            <div>
                <Typography
                    fontFamily='Poppins'
                    fontWeight={'bold'}
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handleMenuOpen}                    
                >
                    {menu.name}
                    <KeyboardArrowDown fontSize="small"/>
                </Typography>
                <Menu
                    id="mouse-over-popover"
                    open={open} 
                    anchorEl={anchorEl}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                    >
                    {menu.children.map((m)=>(
                        <MenuItem key={m.name}>{m.name}</MenuItem>
                    ))}
                </Menu>
            </div>
            }
        </div>
    )   
}