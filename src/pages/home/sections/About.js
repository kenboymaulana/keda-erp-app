import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Assessment, SupportAgent, TrendingUp } from "@mui/icons-material";

const About = () => {
  return (
    <Box id="about" sx={{ py: 15, px: 4, background: "linear-gradient(135deg, #f9f9f9, #eef5ff)" }}>
      {/* Judul */}
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Tentang Kami
      </Typography>
      <Box
        sx={{
          width: 80,
          height: 4,
          backgroundColor: "#1976d2",
          borderRadius: 2,
          mx: "auto",
          mb: 6,
        }}
      />

      <Grid container spacing={6}>
        {/* Kiri: Teks */}
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                textAlign: "center",
                width: { xs: "100%", md: "70%" },
              }}
            >
              <b>KeDa ERP System</b> hadir untuk membantu bisnis Anda berkembang lebih cepat,
              efisien, dan terukur. Dengan solusi digital yang sederhana namun kuat, kami percaya
              setiap pelaku usaha baik skala kecil, menengah, maupun besar berhak memiliki akses ke
              sistem manajemen modern yang mudah digunakan.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: "16px" }}>
                <TrendingUp sx={{ fontSize: 40, color: "#1976d2", mb: 1 }} />
                <Typography fontWeight="bold">Efisiensi Bisnis</Typography>
                <Typography variant="body2">
                  Membuat pengelolaan bisnis lebih transparan & terukur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: "16px" }}>
                <Assessment sx={{ fontSize: 40, color: "#0288d1", mb: 1 }} />
                <Typography fontWeight="bold">Laporan Jelas</Typography>
                <Typography variant="body2">
                  Menyediakan data akurat untuk keputusan tepat.
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: "16px" }}>
                <SupportAgent sx={{ fontSize: 40, color: "#009688", mb: 1 }} />
                <Typography fontWeight="bold">Dukungan Penuh</Typography>
                <Typography variant="body2">
                  Memberikan support terbaik agar bisnis Anda terus berkembang.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
