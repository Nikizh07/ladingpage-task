import { Box, Button, Typography } from "@mui/material";
import React from "react";
import room from "../assets/room.jpg";

const Promotion = () => {
  return (
    <Box display={"flex"} padding={5} height={"70vh"}>
      <Box
        width={"50%"}
        padding={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginBottom={"4rem"}
      >
        <Typography
          variant="h3"
          fontFamily={"Libre Baskerville, serif"}
          fontStyle="italic"
        >
          Austin Real Estate Services You Can Trust.
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"Roboto, sans-serif"}
          marginTop={2}
          lineHeight={2}
        >
          Whether you're looking to sell your property at top value or find the
          perfect home in the heart of Austin, Olivia Marks Real Estate combines
          local expertise, proven strategies, and a personal touch to make your
          goals a reality. From pricing your home right to negotiating on your
          behalf, we handle the details—so you don't have to.
        </Typography>
        <Box display={"flex"}>
          {["Start Your Selling Journey", "Find Your Dream Home"].map(
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
        width={"50%"}
        height={"100%"}
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
