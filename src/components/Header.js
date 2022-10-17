import React from "react";
import { Box, Typography } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const Header = () => {
    const item = useSelector((state) => state.cart)
    const numberItems = () => {
        let itemQuantity = 0;
        item.forEach((i => {
            itemQuantity += i.qty;
        }))
        return (itemQuantity);
    }
    return(
        <>
        <Box className= "main-header">
            <Box className="shoppingIcon">
                <Link to="/home"><ShoppingBagIcon /></Link>
                <Typography><span>S</span>hop<span>O</span>nline</Typography>
            </Box>
            <Box className="cartIcon">
                <Typography className="totalData">{item.length + numberItems()}</Typography>
                <Link to="/cart">
                    <ShoppingCartIcon/>
                </Link>
                
            </Box>
        </Box>
        </>
    )
}

export default Header;