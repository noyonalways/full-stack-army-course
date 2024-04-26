import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Checkbox size="small" />
        <Checkbox size="medium" />
        <Checkbox
          size="large"
          checkedIcon={<FavoriteBorder />}
          icon={<Favorite color="success" />}
          color="success"
        />
        <Checkbox
          size="large"
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 80,
            },
            color: "red",
          }}
          color="success"
        />
      </Container>
    </>
  );
};

export default App;
