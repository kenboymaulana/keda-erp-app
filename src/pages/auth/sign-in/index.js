import React from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Grid container height={"100vh"}>
      <title>Login - KeDa ERP System</title>
      {/* Left Image */}
      <Grid
        item
        size={{ xs: 12, md: 8 }}
        sx={{
          display: { xs: "none", md: "block" },
          backgroundImage: "url('/assets/images/bg-login.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      />

      {/* Right Form */}
      <Grid item size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            pt: { xs: 8, md: 12 },
            flexDirection: "column",
            justifyContent: "center",
            borderLeft: 1,
            minHeight: "100%",
            borderLeftColor: "primary.main",
            backgroundImage: "url('/assets/images/wave_gradient_blue.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Selamat Datang !
          </Typography>
          <Typography variant="body1" color="white" mb={4}>
            Silakan login untuk melanjutkan ke dashboard KeDa ERP System
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff", borderColor: "#fff" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff", borderColor: "#fff" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Login
            </Button>

            <Button
              variant="text"
              fullWidth
              sx={{
                mt: 2,
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                  background: "transparent",
                },
              }}
              href="/"
            >
              ← Kembali ke Halaman Utama
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
