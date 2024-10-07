import React from "react";
import { Box, Typography, IconButton, BottomNavigation, BottomNavigationAction } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookIcon from "@mui/icons-material/Book";
import Layout from "./layout";

 const DiningOptions = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
        <Box width={393} height={852} position="relative" bgcolor="white">
          <Box position="absolute" top={103} left={59}>
            <Typography variant="h4" component="div" sx={{ fontFamily: 'Roboto', fontWeight: 'normal', color: 'black' }}>
              Dining Options
            </Typography>
          </Box>
          <Box position="absolute" top={157} left={59}>
            <Typography variant="body1" component="div" sx={{ fontFamily: 'Roboto', fontWeight: 'normal', color: 'black' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ma
            </Typography>
          </Box>
          <Box position="absolute" top={211} left={53} width={293} height={430} sx={{ backgroundImage: 'url(/static/img/frame-2.png)', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'scroll' }} />
          <Box position="absolute" top={669} left={59}>
            <Typography variant="body1" component="div" sx={{ fontFamily: 'Roboto', fontWeight: 'normal', color: 'black' }}>
              For more information, check out the Hospitality website.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default DiningOptions;