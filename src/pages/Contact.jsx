import { Box, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }} // Stack on small screens, row on larger screens
      padding={5}
      height={"auto"}
      sx={{ backgroundColor: "#333333" }}
    >
      {/* Left Section: Introduction */}
      <Box
        width={{ xs: "100%", md: "50%" }} // Full width on small screens, half on larger screens
        display="flex"
        justifyContent="center"
        marginBottom={{ xs: "2rem", md: "0" }} // Add spacing for smaller screens
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "Libre Baskerville, serif",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Olivia Brown
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontFamily: "Roboto, sans-serif",
              marginTop: 2,
              lineHeight: 2,
              textAlign: "center",
              fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
            }}
          >
            Have questions or need assistance? We're here to help! Reach out to
            us via email or phone, and we'll get back to you as soon as
            possible.
          </Typography>
        </Box>
      </Box>

      {/* Right Section: Contact Details */}
      <Box
        width={{ xs: "100%", md: "50%" }} // Full width on small screens, half on larger screens
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }} // Center on small screens
        color="white"
        paddingLeft={{ md: "2rem" }} // Add padding for larger screens
      >
        <Typography
          variant="h4"
          fontFamily={"Playfair Display, serif"}
          sx={{
            textAlign: { xs: "center", md: "left" }, // Center on small screens
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"Roboto, sans-serif"}
          marginTop={"10px"}
          sx={{
            textAlign: { xs: "center", md: "left" }, // Center on small screens
          }}
        >
          Phone: (512) 555-1234
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"Roboto, sans-serif"}
          marginTop={"10px"}
          sx={{
            textAlign: { xs: "center", md: "left" }, // Center on small screens
          }}
        >
          Email: oliviabrown@contact.me
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
