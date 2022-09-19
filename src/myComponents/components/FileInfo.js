/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

import MDInput from "components/MDInput";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import NativeSelect from "@mui/material/NativeSelect";
import FormField from "./FormField/index";
import SelectField from "./SelectField/SelectField";

function FileInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    doctitle,
    type,
    incomingNumber,
    incomingDate,
    priority,
    receivingMechanism,
    recivefrom,
    department,
    description,
  } = formField;
  const {
    doctitle: doctitleV,
    type: typeV,
    incomingNumber: incomingNumberV,
    incomingDate: incomingDateV,
    priority: priorityV,
    receivingMechanism: receivingMechanismV,
    recivefrom: recivefromV,
    department: departmentV,
    description: descriptionV,
  } = values;

  return (
    <Grid item container rowSpacing={0} columnSpacing={4} lg={6}>
      <Grid item lg={6}>
        <FormField
          id="file-name"
          label={doctitle.label}
          name={doctitle.name}
          type={doctitle.type}
          value={doctitleV}
          error={errors.doctitle && touched.doctitle}
          success={doctitleV.length > 0 && !errors.doctitle}
          fullWidth
          variant="standard"
        />
      </Grid>

      <Grid item lg={6}>
        <FormControl fullWidth disabled>
          <InputLabel variant="standard" htmlFor="file-type-selection">
            نوع الملف
          </InputLabel>
          <NativeSelect
            defaultValue={20}
            inputProps={{
              name: "file-type",
              id: "file-type-selection",
            }}
          >
            <option value={10}>صادر</option>
            <option value={20}>وارد</option>
            <option value={30}>مهم</option>
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        <FormField
          type={incomingNumber.type}
          label={incomingNumber.label}
          name={incomingNumber.name}
          value={incomingNumberV}
          placeholder={incomingNumber.placeholder}
          error={errors.incomingNumber && touched.incomingNumber}
          success={incomingNumberV.length > 0 && !errors.incomingNumber}
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item lg={6}>
        <FormField
          type={incomingDate.type}
          label={incomingDate.label}
          name={incomingDate.name}
          value={incomingDateV}
          placeholder={incomingDate.placeholder}
          error={errors.incomingDate && touched.incomingDate}
          success={incomingDateV.length > 0 && !errors.incomingDate}
          //   style={{ paddingTop: "15px" }}
        />
      </Grid>
      <Grid item lg={6}>
        <FormControl fullWidth>
          <SelectField
            options={["الأولوية", "صادر", "وارد", "مذكرة داخلية"]}
            type={priority.type}
            label={priority.label}
            name={priority.name}
            value={priorityV}
            placeholder={priority.placeholder}
            error={errors.priority && touched.priority}
            success={priorityV.length > 0 && !errors.priority}
          />
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        <FormControlLabel control={<Checkbox />} label="سري" />
      </Grid>
      <Grid item lg={6}>
        <FormControl fullWidth>
          <SelectField
            options={["النوع", "صادر", "وارد", "مذكرة داخلية"]}
            type={type.type}
            label={type.label}
            name={type.name}
            value={typeV}
            placeholder={type.placeholder}
            error={errors.type && touched.type}
            success={typeV.length > 0 && !errors.type}
          />
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        <FormControl fullWidth>
          <SelectField
            options={["مستلم", "باليد", "بريد"]}
            type={receivingMechanism.type}
            label={receivingMechanism.label}
            name={receivingMechanism.name}
            value={receivingMechanismV}
            placeholder={receivingMechanism.placeholder}
            error={errors.receivingMechanism && touched.receivingMechanism}
            success={receivingMechanismV.length > 0 && !errors.receivingMechanism}
          />
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        <FormControl fullWidth>
          <SelectField
            options={["مستلم", "باليد", "بريد"]}
            type={recivefrom.type}
            label={recivefrom.label}
            name={recivefrom.name}
            value={recivefromV}
            placeholder={recivefrom.placeholder}
            error={errors.recivefrom && touched.recivefrom}
            success={recivefromV.length > 0 && !errors.recivefrom}
          />
          {/* <NativeSelect
            defaultValue={10}
            inputProps={{
              name: "from",
              id: "from-selection",
            }}
          >
            <option value={10}>من</option>
            <option value={20}>وارد</option>
            <option value={30}>مهم</option>
          </NativeSelect> */}
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        <FormControl fullWidth>
          {/* <NativeSelect
            defaultValue={10}
            inputProps={{
              name: "department",
              id: "department-selection",
            }}
          >
            <option value={10}>القسم و الدائرة</option>
            <option value={20}>وارد</option>
            <option value={30}>مهم</option>
          </NativeSelect> */}
          <SelectField
            options={["القسم و الدائرة", "باليد", "بريد"]}
            type={department.type}
            label={department.label}
            name={department.name}
            value={departmentV}
            placeholder={department.placeholder}
            error={errors.department && touched.department}
            success={departmentV.length > 0 && !errors.department}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {/* <MDInput
          id="description-of-file"
          label="الوصف"
          fullWidth
          variant="standard"
          multiline
          rows={3}
        /> */}
        <FormField
          type={description.type}
          label={description.label}
          name={description.name}
          value={descriptionV}
          placeholder={description.placeholder}
          error={errors.description && touched.description}
          success={descriptionV.length > 0 && !errors.description}
          fullWidth
          variant="standard"
          multiline
          rows={3}
        />
      </Grid>
    </Grid>
  );
}
FileInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default FileInfo;
