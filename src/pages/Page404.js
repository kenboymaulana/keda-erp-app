// import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  // display: 'flex',
  justifyContent: "center",
  // flexDirection: 'column',
  padding: theme.spacing(0, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Box
            component="img"
            src={"/assets/images/404Page.jpg"}
            sx={{ height: 400, mx: "auto", my: 4 }}
          />
          <Typography variant="h3" paragraph sx={{ mt: -8 }}>
            Laman Tidak Ditemukan
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 5 }}>
            Maaf, kami tidak dapat menemukan laman yang Anda cari. Silakan cek kembali URL yang Anda
            akses.
          </Typography>

          <Button to={-1} size="large" variant="contained" component={RouterLink}>
            Kembali
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
