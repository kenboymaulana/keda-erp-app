import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Container,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // tutup drawer setelah klik
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(12px)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <img
              width={150}
              style={{ marginTop: 15, marginBottom: 15 }}
              src="/assets/images/logo.png"
              alt="Logo"
            />

            {/* Menu desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleScroll(item.id)}
                  sx={{ color: "#333", fontWeight: "500" }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  borderRadius: "20px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #33A1E0, #1C6EA4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1C6EA4, #1C6EA4)",
                  },
                }}
                onClick={() => navigate("/sign-in")}
              >
                Masuk
              </Button>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #33A1E0, #1C6EA4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1C6EA4, #1C6EA4)",
                  },
                }}
              >
                Daftar Akun
              </Button>
            </Box>

            {/* Burger icon untuk mobile */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              edge="end"
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <img
            width={150}
            style={{ marginTop: 15, marginBottom: 15 }}
            src="/assets/images/logo.png"
            alt="Logo"
          />
          <List>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => handleScroll(item.id)}
                sx={(theme) => ({
                  borderRadius: 1,
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: theme.vars
                      ? theme.vars.palette.action.hover // kalau pakai Joy + Material
                      : theme.palette.action.hover, // kalau pakai Material doang
                  },
                })}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}

            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #33A1E0, #1C6EA4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1C6EA4, #1C6EA4)",
                  },
                }}
                onClick={() => navigate("/sign-in")}
              >
                Masuk
              </Button>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #33A1E0, #1C6EA4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1C6EA4, #1C6EA4)",
                  },
                }}
              >
                Daftar Akun
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
