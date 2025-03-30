import { Box, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box display={"flex"} padding={5} height={"40vh"} sx={{backgroundColor: "#333333"}}>
        <Box
            width={"40%"}
            display="flex"
            justifyContent="center"
            marginBottom={"4rem"}
        >
            <Box display={"flex"} flexDirection={"column"}>
                <h1 style={{ color: "white", fontFamily: "Libre Baskerville, serif", fontStyle: "italic" }}>
                Olivia Brown
                </h1>
                <p style={{ color: "white", fontFamily: "Roboto, sans-serif", marginTop: 2, lineHeight: 2 }}>
                Have questions or need assistance? We're here to help! Reach out to us via email or phone, and we'll get back to you as soon as possible.
                </p>
            </Box>

        </Box>
        <Box marginLeft={"25rem"}>
        <Box color={"white"} display={"flex"} flexDirection={"column"}>
                <Typography variant='h4' fontFamily={"Playfair Display, serif"} >Contact</Typography>
                <Typography variant='h6' fontFamily={"Roboto, sans-serif"} marginTop={"10px"}>Phone: (512) 555-1234</Typography>
                <Typography variant='h6' fontFamily={"Roboto, sans-serif"} marginTop={"10px"}>Email: oliviabrown@contact.me</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Contact
