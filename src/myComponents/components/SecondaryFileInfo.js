import { useState } from "react";

import Grid from "@mui/material/Grid";

import MDInput from "components/MDInput";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import Autocomplete from "@mui/material/Autocomplete";

import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import MDButton from "components/MDButton";

export default function SecondaryFileInfo() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item container rowSpacing={0} columnSpacing={4} lg={6}>
      <Grid item lg={6}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={["الدعم الفني", "الشبكات"]}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} variant="standard" label="مصدر الى" placeholder="مصدر الى" />
          )}
        />
      </Grid>

      <Grid item lg={6}>
        <MDInput id="out-number" label="رقم الصادر" fullWidth variant="standard" />
      </Grid>
      <Grid item lg={6}>
        <DesktopDatePicker
          label="تاريخ اصدار الملف"
          inputFormat="MM/dd/yyyy"
          value={value}
          sx={{ width: "100% !important" }}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </Grid>
      <Grid item lg={12}>
        <FormControl
          sx={{ display: "inline-flex", flexDirection: "row", alignItems: "center", gap: "0.6em" }}
        >
          <FormLabel id="is-this-file-attached-to-previous-file" color="info" component="span">
            هل هذا الملف ملحق بملف سابق ؟
          </FormLabel>
          <RadioGroup
            sx={{ display: "inline-flex", flexDirection: "row" }}
            row
            aria-labelledby="is-this-file-attached-to-previous-file"
            name="controlled-is-this-file-attached-to-previous-file"

            // value={value}
            // onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="نعم" />
            <FormControlLabel value="no" control={<Radio />} label="لا" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={6}>
        <MDInput id="attached-file-number" label="رقم الملف الملحق" fullWidth variant="standard" />
      </Grid>
      <Grid item lg={6}>
        <DesktopDatePicker
          label="تاريخ الملف الملحق"
          inputFormat="MM/dd/yyyy"
          value={value}
          sx={{ width: "100% !important" }}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </Grid>
      <Grid item lg={6}>
        <MDInput id="attached-file-type" label="نوعه" fullWidth variant="standard" />
      </Grid>
      <Grid item lg={6}>
        <MDButton variant="gradient" color="light" sx={{ mr: 1 }}>
          بحث
        </MDButton>
      </Grid>
    </Grid>
  );
}
