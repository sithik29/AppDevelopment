import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';

export default function UserNavBar() {

const user = useSelector(state => state.user.value);
const navigate = useNavigate()
    
const handleLogin = () =>{
    // dispatch(logout());
    navigate('/login');
}
const handleSignUp = () =>{
    // dispatch(logout());
    navigate('/signup');
}
    return (
        <>
            <AppBar position='static' color='default' sx={{ backgroundColor:'#2e7eee',borderStyle:''}}>
                <Toolbar>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h2' sx={{ fontSize: '32px',color:'white' }}>TeamConnect</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h4' sx={{ fontSize: '16px',color:'white' }}>{user.username}</Typography>
                           <AccountCircleIcon sx={{width:'50px',height:'35px'}}/>   
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
