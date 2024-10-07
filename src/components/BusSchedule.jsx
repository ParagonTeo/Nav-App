import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookIcon from "@mui/icons-material/Book";
import { Box, Typography, IconButton, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Layout from "./layout";

const BusSchedule = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
        <Box width={393} height={852} position="relative" overflow="hidden">
          <Box
            position="absolute"
            top={170}
            left={42}
            width={315}
            height={318}
            sx={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/frame-3.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'scroll',
            }}
          />
          <Typography
            variant="h6"
            component="div"
            position="absolute"
            top={99}
            left={42}
            sx={{ fontFamily: 'Roboto', fontWeight: 'normal' }}
          >
            Bus Schedule
          </Typography>
          <Typography
            variant="body1"
            component="p"
            position="absolute"
            top={684}
            left={56}
            sx={{ fontFamily: 'Roboto', fontWeight: 'normal' }}
          >
            For more information, check out the Citibus website.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            position="absolute"
            top={523}
            left={51}
            sx={{ fontFamily: 'Roboto', fontWeight: 'normal' }}
          >
            Operation hours
          </Typography>
          <Typography
            variant="body1"
            component="div"
            position="absolute"
            top={570}
            left={56}
            sx={{ fontFamily: 'Roboto', fontWeight: 'normal' }}
          >
            Days and times
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default BusSchedule; // Default export