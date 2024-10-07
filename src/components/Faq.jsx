import React from "react";
import { Box, Typography, AppBar, Toolbar, IconButton, List, ListItem, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookIcon from "@mui/icons-material/Book";
import Layout from "./layout";

 const Faq = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center" width="100%">
        <Box width={393} height={852} position="relative" bgcolor="white">
          <Typography variant="h6" style={{ marginTop: 16, marginLeft: 46 }}>
            Frequently Asked Questions
          </Typography>
          <Box
            width={310}
            bgcolor="#fff7f7"
            borderRadius={2}
            display="flex"
            flexDirection="column"
            position="absolute"
            top={166}
            left={39}
            p={2}
          >
            <List>
              <ListItem button>
                <Typography variant="body1">Where to get my student ID?</Typography>
              </ListItem>
              <ListItem button>
                <Typography variant="body1">I’m sick. Where do I go?</Typography>
              </ListItem>
              <ListItem button>
                <Typography variant="body1">I lost my student ID</Typography>
              </ListItem>
              <ListItem button>
                <Typography variant="body1">Where to find class info?</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Faq;