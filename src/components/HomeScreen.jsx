import React, { useState } from "react";
import { Box, Typography, AppBar, Toolbar, IconButton, InputBase, Paper, BottomNavigation, BottomNavigationAction, Drawer, List, ListItem, ListItemText } from "@mui/material";
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

  // Handle search focus
  const handleSearchFocus = () => {
    setSearchFocus(true);
  };

  const handleSearchBlur = () => {
    setSearchFocus(false);
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
      <Box display="flex" justifyContent="center" width="100%">
        <Box width={393} height={852} position="relative" bgcolor="white">
          { /*Drawer for menu was here*/}
          <Box
            width={393}
            height={431}
            position="absolute"
            top={64}
            left={0}
            sx={{
              backgroundImage: 'url(./static/img/rectangle-2.png)',
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
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here...."
                inputProps={{ 'aria-label': 'search' }}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>

          <Typography
            variant="body1"
            sx={{
              position: 'absolute',
              top: 513,
              left: 39,
              fontFamily: 'Roboto, Helvetica',
              fontWeight: 'normal',
              color: 'black',
              letterSpacing: '0.5px',
              lineHeight: '24px',
            }}
          >
            Favorite places
          </Typography>



          {/* Content */}
          <Box
            display="flex"
            width={412}
            height={221}
            position="absolute"
            top={538}
            left={0}
            padding="16px 8px"
            gap={2}
          >
            <Box
              flex={1}
              sx={{
                backgroundImage: 'url(/static/img/item-1.png)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                borderRadius: 28,
              }}
            />
            <Box
              width={56}
              sx={{
                backgroundImage: 'url(/static/img/item-last.png)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                borderRadius: 28,
              }}
            />
          </Box>

          {/* Bottom Navigation */}{/*}
          <BottomNavigation
            value={navValue}
            onChange={handleNavChange}
            showLabels
            sx={{
              position: 'absolute',
              bottom: 0,
              width: 393,
              backgroundColor: 'white',
            }}
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
          </BottomNavigation>*/}
        </Box>
      </Box>
    </Layout>
  );
};