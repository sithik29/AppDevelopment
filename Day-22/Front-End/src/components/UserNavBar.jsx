import React, { useEffect } from 'react'
import { AppBar, Box,IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';

export default function UserNavBar() {

const storeValue = useSelector(state => state.user.value)
// const object = JSON.parse(storeValue)
const navigate = useNavigate()

const handleProfile = (e) =>{
    // e.prevantDefault()   
    navigate("/student/profile")
}
useEffect(()=>{
    console.log(storeValue);
},[storeValue])


    return (
        <>
            <AppBar position='static' color='default' sx={{ backgroundColor:'#2e7eee',borderStyle:''}}>
                <Toolbar>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h2' sx={{ fontSize: '32px',color:'white' }}>TeamConnect</Typography>
                        <Box sx={{  display: 'flex', alignItems: 'center' }} onClick={handleProfile}>
                            <Tooltip title="Go To My Account" sx={{width:'100%', display: 'flex', alignItems: 'center' }}>
                                <IconButton  sx={{color:'white'}} >{storeValue}<AccountCircleIcon sx={{width:'50px',height:'35px'}} />   </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
