import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion"; // 👈 import framer motion

const tiers = [
  {
    title: "Basic",
    price: "Free",
    features: ["Barang Masuk/Keluar", "Lihat Keuntungan"],
    color: "#f5f5f5",
    textColor: "#333",
  },
  {
    title: "Business",
    price: "Rp99.000",
    features: ["Semua fitur Basic", "Chart Penjualan", "Support 7x24 Jam"],
    color: "linear-gradient(135deg, #2196f3, #1976d2)",
    textColor: "#fff",
    highlight: true,
  },
  {
    title: "Entrepreneur",
    price: "Rp199.000",
    features: ["Semua fitur Business", "Export ke Excel", "AI Prediksi Penghasilan"],
    color: "linear-gradient(135deg, #9c27b0, #e91e63)",
    textColor: "#fff",
  },
];

const Pricing = () => {
  return (
    <Box
      id="pricing"
      container
      sx={{
        py: 15,
        backgroundColor: "#fafafa",
        backgroundImage: "url('/assets/images/background-wave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        Pilih Paket TIER Sesuai Kebutuhan Anda
      </Typography>

      <Box
        sx={{
          width: 80,
          height: 4,
          bgcolor: "primary.main",
          mx: "auto",
          mb: 6,
          borderRadius: 2,
        }}
      />

      <Grid container spacing={4} justifyContent="center" pl={4} pr={4}>
        {tiers.map((tier, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            {/* Bungkus Card pake motion.div */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // biar animasi muncul satu-satu
                type: "spring",
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  mx: "auto",
                  width: { xs: "100%", sm: "80%", md: "70%" },
                  height: "100%",
                  textAlign: "center",
                  borderRadius: "16px",
                  background: tier.color,
                  color: tier.textColor,
                  border: tier.title === "Basic" ? "1px solid #e0e0e0" : "none",
                  boxShadow: tier.highlight
                    ? "0 8px 28px rgba(33, 150, 243, 0.35)"
                    : "0 4px 12px rgba(0,0,0,0.08)",
                  transform: tier.highlight ? "scale(1.06)" : "scale(1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: "0 10px 32px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {tier.highlight && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: -40,
                      width: "150px",
                      textAlign: "center",
                      background: "#ff9800",
                      color: "#fff",
                      fontWeight: "bold",
                      py: 0.5,
                      transform: "rotate(45deg)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    Best
                  </Box>
                )}

                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {tier.title}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {tier.price}
                  </Typography>

                  <Box sx={{ textAlign: "left", mb: 3, pl: 3 }}>
                    {tier.features.map((feature, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 20, mr: 1 }} />
                        <Typography variant="body1">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "20px",
                      px: 4,
                      py: 1,
                      fontWeight: "bold",
                      background: "rgba(255,255,255,0.9)",
                      color: tier.highlight ? "#1976d2" : "#333",
                      "&:hover": {
                        background: "#fff",
                      },
                    }}
                  >
                    Pilih Paket
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
