import { Container, Typography } from "@mui/material";
import { useRandomColor } from "../hooks/useRandomColor";

export function ColorBox() {
  const bgColor = useRandomColor();
  return (
    <Container sx={{ border: "1px solid black", backgroundColor: bgColor }}>
      <Typography variant="h2">I am a color box</Typography>
    </Container>
  );
}
