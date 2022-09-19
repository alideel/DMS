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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

export default function data() {
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

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "id", accessor: "id", align: "center" },
      { Header: "Name Of Department", accessor: "nameOfDepartment", align: "left" },
      { Header: "Created By", accessor: "createdBy", align: "left" },
      { Header: "details", accessor: "details", align: "center", width: "30%" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            computer department
          </MDTypography>
        ),
        createdBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint porro ab voluptatibus
            consectetur fugit optio eum eaque neque.
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            network department
          </MDTypography>
        ),
        createdBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint porro ab voluptatibus
            consectetur fugit optio eum eaque neque.
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            it department
          </MDTypography>
        ),
        createdBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint porro ab voluptatibus
            consectetur fugit optio eum eaque neque.
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            computer department
          </MDTypography>
        ),
        createdBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint porro ab voluptatibus
            consectetur fugit optio eum eaque neque.
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            computer department
          </MDTypography>
        ),
        createdBy: <Author image={team3} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint porro ab voluptatibus
            consectetur fugit optio eum eaque neque.
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        id: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        nameOfDepartment: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            computer department
          </MDTypography>
        ),
        createdBy: <Author image={team4} name="John Michael" email="john@creative-tim.com" />,
        details: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint porro ab voluptatibus
            consectetur fugit optio eum eaque neque.
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
    ],
  };
}
