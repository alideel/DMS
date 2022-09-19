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
};

export default initialValues;
