import React, { useState } from "react";
import { Box, Typography, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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