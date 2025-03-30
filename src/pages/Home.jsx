import React from "react";
import image from "../assets/image.png";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const Home = () => {
return (
    <Box
        sx={{
            backgroundImage: `url(${image})`,
            height: "100vh",
            backgroundSize: "cover",
        }}
    >
        <Typography
            variant="h3"
            sx={{
                fontFamily: "Cedarville Cursive, cursive", // Handwritten-style font
                color: "white",
                padding: 5,
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
            marginTop={"7rem"}
        >
            <Typography
                variant="h6"
                sx={{
                    fontFamily: "Roboto, sans-serif", // Clean sans-serif font
                }}
            >
                MAKE YOUR HOME IN
            </Typography>
            <Typography
                variant="h1"
                sx={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "7rem",
                }}
            >
                AUSTIN
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontFamily: "Roboto, sans-serif", // Clean sans-serif font
                }}
            >
                MUSIC / CULTURE / COMMUNITY
            </Typography>
        </Box>

        <Box color={"white"} marginTop={"8rem"} textAlign={"center"}>
            <Typography variant="h5" fontFamily={"Playfair Display, serif"}>
                Expert guidance to buy or sell your home in Austin's competitive
                market.
            </Typography>
            <Box display={"flex"} gap={2} justifyContent={"center"} marginTop={5}>
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
