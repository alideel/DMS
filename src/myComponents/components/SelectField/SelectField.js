// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
import NativeSelect from "@mui/material/NativeSelect";

function SelectField({ label, name, options, ...rest }) {
  return (
    <MDBox mb={1.5}>
      <Field
        {...rest}
        name={name}
        as={NativeSelect}
        variant="standard"
        label={label}
        fullWidth
        placeholder="First Name"
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
        {/* <NativeSelect
          inputProps={{
            name: { name },
            id: "priority-selection",
          }}
        >
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </NativeSelect> */}
        {/* <NativeSelect
          sx={{ width: "100%" }}
          inputProps={{
            name: "priority",
            id: "priority-selection",
          }}
        >
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </NativeSelect> */}
      </Field>
      <MDBox mt={0.75}>
        <MDTypography component="div" variant="caption" color="error" fontWeight="regular">
          <ErrorMessage name={name} />
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for FormField
SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectField;
