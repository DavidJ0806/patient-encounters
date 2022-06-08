/**
 * validates the note field
 * @param {String} value
 * @returns String
 */
export const isNoteValid = (value) => {
  if (value.length === 0) return '';
  return '';
};

/**
 * validates the visit code field
 * @param {String} value
 * @returns String
 */
export const isVisitCodeValid = (value) => {
  if (value && value.match(/^(\w\d\w\s\d\w\d)$/)) {
    return '';
  }
  return "Must follow format example 'H7J 8W2'.";
};

/**
 * validates the provider field
 * @param {String} value
 * @returns String
 */
export const isProviderValid = (value) => {
  if (value && value.trim().length > 0) {
    return '';
  }
  return 'Provider is required.';
};

/**
 * validates the Billing code field
 * @param {String} value
 * @returns String
 */
export const isBillingCodeValid = (value) => {
  if (value && value.match(/^(\d){3}\.(\d){3}\.(\d){3}-(\d){2}$/)) {
    return '';
  }
  return "Must follow the example '123.456.789-12'.";
};

/**
 * validates the ICD10 code
 * @param {String} value
 * @returns String
 */
export const isICD10Valid = (value) => {
  if (value && value.match(/^(\w)(\d){2}$/)) {
    return '';
  }
  return "Must follow format example 'A22'.";
};

/**
 * validates the total cost
 * @param {String} value
 * @returns String
 */
export const isTotalCostValid = (value) => {
  if (value && value.toString().match(/^\d+\.\d{2}$/)) {
    return '';
  }
  return "Cost must have two decimal places - '12.99'.";
};

/**
 * validates the copay field
 * @param {String} value
 * @returns String
 */
export const isCopayValid = (value) => {
  if (value && value.toString().match(/^\d+\.\d{2}$/)) {
    return '';
  }
  return "Copay must have two decimal places - '12.99'.";
};

/**
 * validates the chief complaint field
 * @param {String} value
 * @returns String
 */
export const isChiefComplaintValid = (value) => {
  if (value && value.trim().length > 0) {
    return '';
  }
  return 'Chief Complaint is required.';
};

/**
 * validates the pulse field
 * @param {String} value
 * @returns String
 */
export const isPulseValid = (value) => {
  if (value === undefined || value === null) return '';
  if (value.toString().trim().length === 0) return '';
  if (value > 0) {
    return '';
  }
  return 'Pulse is optional but must be a number.';
};

/**
 * validates the systolic field
 * @param {String} value
 * @returns String
 */
export const isSystolicValid = (value) => {
  if (value === undefined || value === null) return '';
  if (value.toString().trim().length === 0) return '';
  if (value > 0) {
    return '';
  }
  return 'Systolic is optional but must be a number.';
};

/**
 * validates the diastolic field
 * @param {String} value
 * @returns String
 */
export const isDiastolicValid = (value) => {
  if (value === undefined || value === null) return '';
  if (value.toString().trim().length === 0) return '';
  if (value > 0) {
    return '';
  }
  return 'Diastolic is optional but must be a number.';
};

/**
 * validates the date field
 * @param {String} value
 * @returns String
 */
export const isDateValid = (value) => {
  if (value && value.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return '';
  }
  return 'Date must follow format YYYY-MM-DD.';
};

/**
 * checks to see if there are errors in the given object
 * @param {Object} errorMessages
 * @returns boolean
 */
export const areEncounterErrorsPresent = (errorMessages) => !Object.values(errorMessages).some((error) => (error !== ''));

/**
 * validates a form
 * @param {Object} form
 * @returns Object
 */
export const validateEncounterForm = (form) => {
  const errorMessages = {};
  errorMessages.date = isDateValid(form?.date);
  errorMessages.diastolic = isDiastolicValid(form?.diastolic);
  errorMessages.systolic = isSystolicValid(form?.systolic);
  errorMessages.pulse = isPulseValid(form?.pulse);
  errorMessages.chiefComplaint = isChiefComplaintValid(form?.chiefComplaint);
  errorMessages.copay = isCopayValid(form?.copay);
  errorMessages.totalCost = isTotalCostValid(form?.totalCost);
  errorMessages.icd10 = isICD10Valid(form?.icd10);
  errorMessages.billingCode = isBillingCodeValid(form?.billingCode);
  errorMessages.provider = isProviderValid(form?.provider);
  errorMessages.visitCode = isVisitCodeValid(form?.visitCode);
  errorMessages.notes = isNoteValid(form?.notes);
  return errorMessages;
};
