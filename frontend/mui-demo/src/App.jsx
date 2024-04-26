import { Favorite, FavoriteBorder, Star } from "@mui/icons-material";
import { Box, Checkbox, Container, Rating } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const App = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
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
        <Box display={"flex"} alignItems={"center"}>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default App;
