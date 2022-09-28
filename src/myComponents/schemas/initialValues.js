import form from "./form";

const {
  formField: {
    doctitle,
    type,
    incomingNumber,
    incomingDate,
    priority,
    reciveid,
    recivefrom,
    description,
    receivingMechanism,
    department,
    secret,
  },
} = form;

const initialValues = {
  [doctitle.name]: "",
  [type.name]: "",
  [incomingNumber.name]: "",
  [incomingDate.name]: "",

  [priority.name]: "",
  [reciveid.name]: "",

  [recivefrom.name]: "",
  [description.name]: "",
  [receivingMechanism.name]: "",
  [department.name]: "",
  [secret.name]: true,
};

export default initialValues;
