const form = {
  formId: "incoming-document-form",
  formField: {
    doctitle: {
      name: "doctitle",
      label: "عنون الملف",
      type: "text",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    type: {
      name: "type",
      label: "النوع",
      type: "text",
      options: ["صادر", "وارد", "مذكرة داخلية"],
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    incomingNumber: {
      name: "incomingNumber",
      label: "رقم الوارد",
      type: "number",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    incomingDate: {
      name: "incomingDate",
      label: "تاريخ الوارد",
      type: "date",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    priority: {
      name: "priority",
      label: "الأولوية",
      type: "text",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    incomingType: {
      name: "incomingType",
      label: "النوع",
      type: "text",
      errorMsg: null,
    },
    reciveid: {
      name: "reciveid",
      label: "رقم الصادر",
      type: "text",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    recivefrom: {
      name: "recivefrom",
      label: "الجهة المصدرة لملف",
      type: "text",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    receivingMechanism: {
      name: "receivingMechanism",
      label: "الية الأستلام",
      type: "select",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    department: {
      name: "department",
      label: "القسم و الدائرة",
      type: "text",
      errorMsg: "هذا الحقل ليس اختياري.",
    },
    description: {
      name: "description",
      label: "الوصف",
      type: "text",
      errorMsg: null,
    },
    secret: {
      name: "secret",
      label: "سري",
      type: "boolean",
      errorMsg: null,
    },
  },
};

export default form;
