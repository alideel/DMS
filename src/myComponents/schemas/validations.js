import * as Yup from "yup";
import form from "./form";

const {
  formField: {
    doctitle,
    type,
    incomingNumber,
    incomingDate,
    priority,
    receivingMechanism,
    recivefrom,
    department,
    secret,
  },
} = form;

const validations = [
  Yup.object().shape({
    [doctitle.name]: Yup.string().required(doctitle.errorMsg),

    [type.name]: Yup.string(),
    [incomingNumber.name]: Yup.string().required(incomingNumber.errorMsg),

    [incomingDate.name]: Yup.string(),
    [priority.name]: Yup.string(),
    [receivingMechanism.name]: Yup.string(),
    [recivefrom.name]: Yup.string(),
    [department.name]: Yup.string(),
    [secret.name]: Yup.boolean(),
    //  [repeatPassword.name]: Yup.string()
    //   .required(repeatPassword.errorMsg)
    //    .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
    //
  }),
];

export default validations;
