import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LocationOn from "@mui/icons-material/LocationOn";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropDownCircle from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropDownCircleOutlined from "@mui/icons-material/ArrowDropDownCircleOutlined";

export const MapComponent = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="#ffffff" height="100%">
      <Box
        position="relative"
        width={393}
        height={852}
        overflow="hidden"
        bgcolor="#ffffff"
      >
        <Box
          position="absolute"
          width={1280}
          height={1280}
          top={0}
          left={-344}
          sx={{
            backgroundImage: "url(/static/img/basemap-image.png)",
            backgroundSize: "100% 100%",
          }}
        >
          <Box
            position="absolute"
            width={51}
            height={51}
            top={656}
            left={490}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              position="relative"
              width={51}
              height={51}
              borderRadius="50%"
              bgcolor="rgba(0, 0, 255, 0.3)"
            >
              <Box
                position="absolute"
                width={25}
                height={25}
                top={13}
                left={13}
                borderRadius="50%"
                border="2px solid #ffffff"
                boxShadow="0px 1px 6px #00000026"
                bgcolor="blue"
              />
            </Box>
          </Box>
          <LocationOn
            sx={{
              position: "absolute",
              width: 65,
              height: 59,
              top: 301,
              left: 476,
            }}
          />
          <Box
            position="absolute"
            width={41}
            height={74}
            top={707}
            left={665}
            bgcolor="white"
            borderRadius={1}
            boxShadow="0px 1px 3px #00000033"
          >
            <img
              style={{ position: "absolute", width: 15, height: 14, top: 11, left: 13 }}
              alt="Union"
              src="/img/union.svg"
            />
            <img
              style={{ position: "absolute", width: 15, height: 3, top: 54, left: 13 }}
              alt="Union"
              src="/img/union-1.svg"
            />
            <Box
              position="absolute"
              width={29}
              height={1}
              top={36}
              left={6}
              bgcolor="#e6e6e6"
            />
          </Box>
          <Box
            position="absolute"
            width={397}
            height={131}
            top={0}
            left={344}
            sx={{
              backgroundImage: "url(/static/img/rectangle-4.svg)",
              backgroundSize: "100% 100%",
            }}
          >
            <Box position="absolute" width={297} height={80} top={27} left={55}>
              <Typography
                position="absolute"
                top={0}
                left={42}
                variant="body1"
                color="black"
              >
                Choose start location
              </Typography>
              <img
                style={{ position: "absolute", width: 22, height: 31, top: 49, left: 0 }}
                alt="Icon"
                src="/img/icon.svg"
              />
              <Box position="absolute" width={297} height={62} top={0} left={0}>
                <img
                  style={{ position: "absolute", width: 22, height: 31, top: 0, left: 0 }}
                  alt="Icon"
                  src="/img/icon-1.svg"
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  width={270}
                  alignItems="center"
                  justifyContent="center"
                  padding="8px 16px"
                  position="absolute"
                  top={30}
                  left={6}
                  borderRadius={1}
                >
                  <Box
                    position="relative"
                    width="100%"
                    height={1}
                    bgcolor="grey.400"
                  />
                </Box>
                <img
                  style={{ position: "absolute", width: 1, height: 18, top: 30, left: 3 }}
                  alt="Vector"
                  src="/img/vector-1.svg"
                />
                <ArrowDropDown
                  sx={{
                    position: "absolute",
                    width: 24,
                    height: 39,
                    top: 23,
                    left: 260,
                  }}
                />
                <ArrowDropDownCircle
                  sx={{
                    position: "absolute",
                    width: 24,
                    height: 39,
                    top: 15,
                    left: 273,
                  }}
                />
              </Box>
              <Typography
                position="absolute"
                top={55}
                left={39}
                variant="body1"
                color="black"
              >
                Choose destination
              </Typography>
            </Box>
            <ArrowDropDownCircleOutlined
              sx={{
                position: "absolute",
                width: 39,
                height: 24,
                top: 15,
                left: 6,
              }}
            />
          </Box>
        </Box>
        <Box
          position="absolute"
          width={16}
          height={20}
          top={340}
          left={-1396}
          sx={{
            backgroundImage: "url(/static/img/default-marker-component-1.png)",
            backgroundSize: "100% 100%",
          }}
        >
          <img
            style={{ position: "absolute", width: 16, height: 20, top: 0, left: 0 }}
            alt="Default marker"
            src="/img/default-marker-component-1.png"
          />
        </Box>
      </Box>
    </Box>
  );
};