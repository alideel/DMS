/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-fragments */
/* eslint-disable arrow-body-style */
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArticleIcon from "@mui/icons-material/Article";
import Stack from "@mui/material/Stack";
import MDButton from "components/MDButton";
import { Formik, Form } from "formik";
// import colors from "assets/theme/base/colors";
import MainStepLayout from "./components/MainStepLayout";
import FileInfo from "./components/FileInfo";
import SecondaryFileInfo from "./components/SecondaryFileInfo";
import Request from "./components/Request";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import "./css/formStyle.css";
// const { indigo } = colors;

const steps = ["معلومات الملف ", "مصدر الى", "الملحقات", "المرفقات"];

// const firstStep = <MainStepLayout content={<FileInfo />} />;
// const secondStep = <MainStepLayout content={<SecondaryFileInfo />} />;

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <MainStepLayout content={<FileInfo formData={formData} />} />;

    case 1:
      return <MainStepLayout content={<SecondaryFileInfo formData={formData} />} />;
    case 2:
      return <MainStepLayout content={<SecondaryFileInfo formData={formData} />} />;

    default:
      return null;
  }
}
// eslint-disable-next-line react/prop-types
export default function HRStep() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const [skipped, setSkipped] = React.useState(new Set());
  const isLastStep = activeStep === steps.length - 1;

  const isStepOptional = () => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // ############################

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <Box sx={{ width: "100%", position: "relative", top: "-4.7rem", marginBottom: "-4.7rem" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidation}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form id={formId} autoComplete="off">
            <Stepper activeStep={activeStep} alternativeLabel sx={{ paddingBlock: 3 }}>
              {steps.map((label) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 1 }} alignItems="center">
              <ArticleIcon fontSize="large" color="secondary" />
              <Typography>{steps[activeStep]}</Typography>
            </Stack>
            <Box sx={{ mt: 4, mb: 2 }}>
              {getStepContent(activeStep, {
                formField,
                values,
                touched,
                errors,
              })}
            </Box>
          </Form>
        )}
      </Formik>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <MDButton
              variant="gradient"
              color="light"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              السابق
            </MDButton>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <MDButton variant="gradient" color="info" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "انتهاء" : "التالي"}
            </MDButton>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
