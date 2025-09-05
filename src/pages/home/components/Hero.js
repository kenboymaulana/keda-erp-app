import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundImage: "url('/assets/images/bg-hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mt: 0,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          maxWidth: "600px",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Selamat Datang di ERP System
        </Typography>
        <Typography variant="h6" gutterBottom>
          Kelola barang masuk/keluar dan pantau keuntungan Anda dengan mudah.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 3,
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            background: "linear-gradient(135deg, #33A1E0, #1C6EA4)",
            "&:hover": {
              background: "linear-gradient(135deg, #1C6EA4, #1C6EA4)",
            },
          }}
        >
          Lihat Dashboard
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
