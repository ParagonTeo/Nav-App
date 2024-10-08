// src/components/Layout.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, BottomNavigation, BottomNavigationAction, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import BookIcon from '@mui/icons-material/Book';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Layout = ({ children }) => {
    // State for bottom navigation
    const [navValue, setNavValue] = useState(0);

    // State for menu drawer
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    // Handle bottom navigation change
    const handleNavChange = (event, newValue) => {
        setNavValue(newValue);
        switch (newValue) {
            case 0:
                navigate("/");
                break;
            case 1:
                navigate("/");
                break;
            case 2:
                navigate("/resources");
                break;
            default:
                break;
        }
    };

    // Handle menu toggle
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Drawer for the Menu */}
            <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                <List>
                    <ListItem button onClick={() => navigate("/")}>
                         <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/profile")}>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/map")}>
                        <ListItemText primary="Map" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/BusSchedule")}>
                        <ListItemText primary="Bus Schedule" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/dining")}>
                        <ListItemText primary="Dining Options" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/faq")}>
                        <ListItemText primary="FAQ" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/settings")}>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Drawer>

            {/* App Bar  appbar color='default', icons='inherit'*/}
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton onClick={toggleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <span style={{ color: 'black' }}>Tech</span>
                        <span style={{ color: '#f31010' }}>Nav</span>
                    </Typography>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <div style={{ flexGrow: 1, padding: '16px' }}>
                {children}
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation
                value={navValue}
                onChange={handleNavChange}
                showLabels
                sx={{ backgroundColor: 'white', display: 'flex', width: '100vw' }}
            >
                <BottomNavigationAction
                    label="Explore"
                    icon={<ExploreIcon />}
                    sx={{
                        color: navValue === 0 ? '#fed8d8' : '#1d1b20',
                    }}
                />
                <BottomNavigationAction
                    label="Saved"
                    icon={<SaveIcon />}
                    sx={{
                        color: navValue === 1 ? '#fed8d8' : '#49454f',
                    }}
                />
                <BottomNavigationAction
                    label="Resources"
                    icon={<BookIcon />}
                    sx={{
                        color: navValue === 2 ? '#fed8d8' : '#49454f',
                    }}
                />
            </BottomNavigation>
        </div>
    );
};

export default Layout;
