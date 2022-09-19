import { Paper } from "@mui/material";
// import PropTypes from "prop-types";
import HRStep from "./HRStep";

function FileForm() {
  return (
    <Paper
      sx={{
        width: 1200,
        padding: 4,
        borderRadius: "0.5rem",
        marginBottom: "0",
        marginTop: "1.5rem",
      }}
    >
      <HRStep />
    </Paper>
  );
}

export default FileForm;
