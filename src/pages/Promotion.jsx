import { Box, Button, Typography } from "@mui/material";
import React from "react";
import room from "../assets/room.jpg";

const Promotion = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }} // Stack on small screens, row on larger screens
      padding={5}
      height={{ xs: "auto", md: "70vh" }} // Adjust height for smaller screens
    >
      {/* Left Section: Text Content */}
      <Box
        width={{ xs: "100%", md: "50%" }} // Full width on small screens, half on larger screens
        padding={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          fontFamily={"Libre Baskerville, serif"}
          fontStyle="italic"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive font size
          }}
        >
          Austin Real Estate Services You Can Trust.
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"Roboto, sans-serif"}
          marginTop={2}
          lineHeight={2}
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
          }}
        >
          Whether you're looking to sell your property at top value or find the
          perfect home in the heart of Austin, Olivia Marks Real Estate combines
          local expertise, proven strategies, and a personal touch to make your
          goals a reality. From pricing your home right to negotiating on your
          behalf, we handle the details—so you don't have to.
        </Typography>
        <Box display={"flex"} flexWrap="wrap">
          {["Start Your Journey", "Find Your Dream Home"].map(
            (text, index) => (
              <Button
                key={index}
                variant="outlined"
                color="white"
                sx={{
                  marginTop: 2,
                  marginRight: 2,
                  backgroundColor: "white",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "brown",
                  },
                }}
              >
                {text}
              </Button>
            )
          )}
        </Box>
      </Box>

      {/* Right Section: Image */}
      <Box
        width={{ xs: "100%", md: "50%" }} // Full width on small screens, half on larger screens
        height={{ xs: "300px", md: "100%" }} // Adjust height for smaller screens
        sx={{
          backgroundImage: `url(${room})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </Box>
  );
};

export default Promotion;
