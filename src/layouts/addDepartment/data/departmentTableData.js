/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import * as React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
// import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { useFetch } from "../../../hooks/useFetch";

export default function data() {
  const { data: departments, isPending, error, postData } = useFetch("/Departments");

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [id, setId] = React.useState(null);

  const handleClickOpen = (name, description, id) => {
    setName(name);
    setDescription(description);
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const EditDialog = ({ id, name, description, open, handleClose }) => {
    const [nameD, setNameD] = React.useState(name);
    const [descriptionD, setDescriptionD] = React.useState(description);
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="xs"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
            تعديل معلومات القسم
          </DialogTitle>
          <DialogContent>
            <MDBox>
              <MDInput
                id="department-name"
                label="اسم القسم"
                variant="standard"
                sx={{ width: "60%" }}
                value={nameD}
                onChange={(e) => {
                  setNameD(e.target.value);
                }}
              />
            </MDBox>
            <MDBox sx={{ marginTop: 3 }}>
              <MDInput
                id="department-name"
                label="وصف القسم"
                variant="standard"
                sx={{ width: "60%" }}
                fullwidth
                value={descriptionD}
                onChange={(e) => {
                  setDescriptionD(e.target.value);
                }}
              />
            </MDBox>
          </DialogContent>
          <DialogActions>
            <MDButton variant="gradient" color="info">
              تغيير
            </MDButton>
            <MDButton variant="gradient" color="info" onClick={handleClose} autoFocus>
              الغاء
            </MDButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
  let rows = [];
  let editDialog = (
    <EditDialog open={open} handleClose={handleClose} name={name} description={description} />
  );
  if (!isPending && departments) {
    departments.forEach((d) => {
      rows.push({
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            {d.id}
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            {d.name}
          </MDTypography>
        ),
        createdBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            {d.description}
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => handleClickOpen(d.name, d.description, d.id)}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      });
    });
  }
  return {
    columns: [
      { Header: "id", accessor: "id", align: "center" },
      { Header: "Name Of Department", accessor: "nameOfDepartment", align: "left" },
      { Header: "Created By", accessor: "createdBy", align: "left" },
      { Header: "details", accessor: "details", align: "center", width: "30%" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows,
    editDialog,
  };
}
