/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import MDButton from "components/MDButton";
import fileImage from "assets/images/new/22.png";

import FilePreview from "react-file-preview-latest";

import "./css/style1.css";

const baseStyle = {
  // flex: 1,
  width: "100%",
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

  const files = acceptedFiles.map((file) => {
    console.log(file, file.type, file.path);
    return (
      <Stack key={file.path} direction="row" sx={{ alignItems: "center", gap: 1 }} mt={2}>
        <FilePreview type="file" file={file} onError={() => console.log("asdasd")} />
        {/* <FilePresentIcon fontSize="large" />
        {file.path} - {file.size} bytes */}
      </Stack>
    );
  });

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
    <section className="container" style={{ width: "100%" }}>
      <div {...getRootProps({ style })} style={{ width: "100%" }}>
        <input {...getInputProps()} />
        {/* <Typography>قم بسحب الملف هنا او أضغط و اختر الملف</Typography> */}
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
          className="file-preview-image-container"
        >
          {/* <Box sx={{ width: "60px", height: "10px", background: "red" }} />

            <Box sx={{ width: "160px", height: "10px", background: "red" }} /> */}
          <p className="on-hover-text">رفع ملف</p>
          <img src={fileImage} alt="preview" className="file-preview-image" />
        </Box>
      </div>

      {files.length > 0 && (
        <aside>
          <Box sx={{ padding: 4 }}>
            <Typography variant="h5" component="div" gutterBottom>
              المستند
              {files}
            </Typography>
            <MDButton variant="gradient" color="info" sx={{ marginTop: 2 }}>
              أرشفة المستند
            </MDButton>
          </Box>
        </aside>
      )}
    </section>
  );
}
