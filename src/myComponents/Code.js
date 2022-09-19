/* eslint-disable react/jsx-props-no-spreading */
import { Box, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import MDButton from "components/MDButton";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function Uploader() {
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone();

  const files = acceptedFiles.map((file) => (
    <Stack key={file.path} direction="row" sx={{ alignItems: "center", gap: 1 }} mt={2}>
      <FilePresentIcon fontSize="large" />
      {file.path} - {file.size} bytes
    </Stack>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography>قم بسحب الملف هنا او أضغط و اختر الملف</Typography>
      </div>
      <aside>
        <Box sx={{ padding: 4 }}>
          {files.length > 0 && (
            <>
              <Typography variant="h5" component="div" gutterBottom>
                المستند
                {files}
              </Typography>
              <MDButton variant="gradient" color="info" sx={{ marginTop: 2 }}>
                أرشفة المستند
              </MDButton>
            </>
          )}
        </Box>
      </aside>
    </section>
  );
}
