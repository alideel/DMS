/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
import Uploader from "../Uploader";

export default function MainLayout({ content }) {
  return (
    <Grid container columnSpacing={4} rowSpacing={0}>
      {content}
      <Grid item container lg={6}>
        <Uploader />
      </Grid>
    </Grid>
  );
}
