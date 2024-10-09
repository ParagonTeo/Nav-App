import React, { useState } from "react";
import { Box, Typography, AppBar, Toolbar, IconButton, InputBase, Paper, BottomNavigation, BottomNavigationAction, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExploreIcon from "@mui/icons-material/Explore";
import BookIcon from "@mui/icons-material/Book";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import Layout from "./layout";

export const HomeScreen = () => {

  // State for search input focus
  const [searchFocus, setSearchFocus] = useState(false);

  // State for menu drawer
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const goToMap = () => {
    navigate('/map'); // Assuming your map route is '/map'
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle navigation for drawer buttons
  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <Layout>
    <Box display="flex" justifyContent="center" width="100vw" alignItems={"center"} alignContent={"center"}>
      <Box bgcolor="white" >
        { /*Drawer for menu was here*/}
        <Box
          width={393}
          height={'50vh'}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/rectangle-2.png)`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
          }}
        >
           <Paper
              component="form"
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 321,
                height: 48,
                position: 'relative',
                top: 32,
                left: 36,
                borderRadius: 28,
                padding: '0 8px',
                backgroundColor: '#fbf8fd',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={goToMap}
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '28px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  color: 'red',
                }}
              >
                Go to Map
              </Button>
            </Paper>
          </Box>


          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto, Helvetica',
              fontWeight: 'normal',
              color: 'black',
              letterSpacing: '0.5px',
              lineHeight: '24px',
              mt: '20px',
              ml: '10px',
            }}
          >
            Favorite places
          </Typography>



          <Box
            display="flex"
            //width={412}
            height={'30vh'}
            //top={538}
            padding="16px 8px"
            gap={2}
          >
            <Box
              flex={1}
              sx={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/item-1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                borderRadius: 28,
              }}
            />
            <Box
              width={56}
              sx={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/item-last.png)`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                borderRadius: 28,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};