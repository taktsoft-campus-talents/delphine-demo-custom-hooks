import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Checkbox from "@mui/material/Checkbox";
import { useRandomColor } from "./hooks/useRandomColor";
import { useState } from "react";

function App() {
  const [changeInterval, setChangeInterval] = useState(1000);
  const bgColor = useRandomColor({ milliseconds: changeInterval });

  return (
    <Container maxWidth="md" sx={{ backgroundColor: bgColor }}>
      <Typography variant="h1" gutterBottom align="center">
        MUI Demo
      </Typography>
      <Typography variant="h2" gutterBottom>
        {changeInterval}
      </Typography>
      <Button
        color="secondary"
        onClick={() => {
          setChangeInterval((prev) => prev - 1000);
        }}
      >
        Decrease
      </Button>
      <Button
        onClick={() => {
          setChangeInterval((prev) => prev + 1000);
        }}
      >
        Increase
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Checkbox defaultChecked />

      <Grid container spacing={2} sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          sx={{ backgroundColor: "aliceblue", padding: 2 }}
        >
          <Typography>I am a grid item</Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          sx={{ backgroundColor: "aliceblue", padding: 2 }}
        >
          <Typography>I am a grid item</Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          sx={{ backgroundColor: "aliceblue", padding: 2 }}
        >
          <Typography>I am a grid item</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
