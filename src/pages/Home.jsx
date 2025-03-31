import React from "react";
import image from "../assets/image.png";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Cedarville Cursive, cursive",
          color: "white",
          padding: 5,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive font size
        }}
      >
        Olivia Brown
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color={"white"}
        marginTop={{ xs: "4rem", sm: "6rem", md: "7rem" }} // Responsive margin
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
          }}
        >
          MAKE YOUR HOME IN
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "3rem", sm: "5rem", md: "7rem" }, // Responsive font size
          }}
        >
          AUSTIN
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
          }}
        >
          MUSIC / CULTURE / COMMUNITY
        </Typography>
      </Box>

      <Box
        color={"white"}
        marginTop={{ xs: "4rem", sm: "6rem", md: "8rem" }}
        textAlign={"center"}
      >
        <Typography
          variant="h5"
          fontFamily={"Playfair Display, serif"}
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Responsive font size
          }}
        >
          Expert guidance to buy or sell your home in Austin's competitive
          market.
        </Typography>
        <Box
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          marginTop={5}
          flexWrap="wrap"
        >
          {["Looking To Buy", "Looking To Sell", "Contact Me"].map((text) => (
            <Button
              key={text}
              variant="outlined"
              color="white"
              sx={{
                "&:hover": {
                  variant: "contained",
                  backgroundColor: "white",
                  color: "black",
                },
                margin: "0.5rem", // Add spacing for smaller screens
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
