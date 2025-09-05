import React from "react";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 15,
        px: 4,
        bgcolor: "#f9fafb",
        // backgroundImage: "url('/assets/images/background-wave.png')",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        Hubungi Kami
      </Typography>
      <Box
        sx={{
          width: 80,
          height: 4,
          backgroundColor: "#1976d2",
          borderRadius: 2,
          mx: "auto",
          mb: 3,
        }}
      />
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 6 }}>
        Kami siap membantu bisnis Anda kapan saja 🚀
      </Typography>

      <Grid container spacing={4}>
        {/* Left: Google Maps */}
        <Grid item size={{ xs: 12, sm: 6 }}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.651179084342!2d112.72716807499826!3d-7.170972071657819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb5f48c4b0fb%3A0xb22ff8949a5e5a6a!2sSurabaya!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid"
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: 2,
            }}
            allowFullScreen=""
            loading="lazy"
          />
        </Grid>

        {/* Right: Contact Info */}
        <Grid item xs={12} md={12}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnIcon sx={{ color: "primary.main" }} />
              <Typography>Jl. Merdeka No. 123, Jakarta, Indonesia</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <WhatsAppIcon sx={{ color: "green" }} />
              <Typography>+62 812 3456 7890</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIcon sx={{ color: "primary.main" }} />
              <Typography>(021) 123-4567</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <EmailIcon sx={{ color: "error.main" }} />
              <Typography>support@kedaerp.com</Typography>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="center">
              <Link href="#" target="_blank">
                <FacebookIcon sx={{ fontSize: 30, color: "#1877f2" }} />
              </Link>
              <Link href="#" target="_blank">
                <InstagramIcon sx={{ fontSize: 30, color: "#e4405f" }} />
              </Link>
              <Link href="#" target="_blank">
                <LinkedInIcon sx={{ fontSize: 30, color: "#0a66c2" }} />
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
