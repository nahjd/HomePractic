import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cards
                    </Typography>
                    <Link to="/login"> <Button style={{ color: "black", backgroundColor: 'white', marginRight: 10 }}>Login</Button></Link>
                    <Link to="/card">
                        <Button style={{ color: "black", backgroundColor: 'white', marginRight: 10 }}  >Card</Button>
                    </Link>
                    <Link to="/wishlist">
                        <Button style={{ color: "black", backgroundColor: 'white', fontSize: 24, marginRight: 10 }} >
                            <FaRegHeart />
                        </Button>
                    </Link>
                    <Link to="/basket">
                        <Button style={{ color: "black", backgroundColor: 'white', fontSize: 24, marginRight: 1 }} >
                            <SlBasket />
                        </Button>
                    </Link>




                </Toolbar>
            </AppBar>
        </Box>
    );
}