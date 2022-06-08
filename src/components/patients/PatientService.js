/**
 * validates the street field
 * @param {String} value
 * @returns String
 */
export const isStreetValid = (value) => {
  if (value.trim().length > 0) {
    return '';
  }
  return 'Street is required';
};

/**
 * validates the email field
 * @param {String} value
 * @returns String
 */
export const isEmailValid = (value) => {
  if (value.match(/^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
    return '';
  }
  return 'A valid email is required.';
};

/**
 * validates the first name field
 * @param {String} value
 * @returns String
 */
export const isFirstNameValid = (value) => {
  if (value && value.match(/^(?:[A-z]|[-|'](?=[A-z]))+$/)) {
    return '';
  }
  return "First name accepts letters and a - or '.";
};

/**
 * validates the last name field
 * @param {String} value
 * @returns String
 */
export const isLastNameValid = (value) => {
  if (value && value.match(/^(?:[A-z]|[-|'](?=[A-z]))+$/)) {
    return '';
  }
  return "Last name accepts letters and a - or '.";
};

/**
 * validates the city field
 * @param {String} value
 * @returns String
 */
export const isCityValid = (value) => {
  if (value.trim().length > 0) {
    return '';
  }
  return 'City is required.';
};

/**
 * validates the state field
 * @param {String} value
 * @returns String
 */
export const isStateValid = (value) => {
  if (value && value.match(/^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]|\s*)$/)) {
    return '';
  }
  return 'A valid abbreviation of a US state is required.';
};

/**
 * validates the postal field
 * @param {String} value
 * @returns String
 */
export const isPostalValid = (value) => {
  if (value && value.match(/^\d{5}(?:[-]\d{4})?$/)) {
    return '';
  }
  return 'Zip must follow format 12345 or 12345-1234.';
};

/**
 * validates the SSN field
 * @param {String} value
 * @returns String
 */
export const isSSNValid = (value) => {
  if (value && value.match(/^\d{3}-\d{2}-\d{4}$/)) {
    return '';
  }
  return 'SSN must follow the format 123-12-1234.';
};

/**
 * validates the age field
 * @param {String} value
 * @returns String
 */
export const isAgeValid = (value) => {
  if (value > 0 && value < 110) {
    return '';
  }
  return 'A valid age is required.';
};

/**
 * validates the weight field
 * @param {String} value
 * @returns String
 */
export const isWeightValid = (value) => {
  if (value > 0 && value < 1312) {
    return '';
  }
  return 'A valid weight in lbs is required';
};

/**
 * validates the gender field
 * @param {String} value
 * @returns String
 */
export const isGenderValid = (value) => {
  if (value.match(/^(Male|Female|Other)$/)) {
    return '';
  }
  return "Gender must be 'Male', 'Female', or 'Other'.";
};

/**
 * validates the insurance field
 * @param {String} value
 * @returns String
 */
export const isInsuranceValid = (value) => {
  if (value.length > 0) {
    return '';
  }
  return 'Insurance is required.';
};

/**
 * validates the height field
 * @param {String} value
 * @returns String
 */
export const isHeightValid = (value) => {
  if (value > 0 && value < 107) {
    return '';
  }
  return 'A valid height in inches is required';
};
/**
 * checks to see if there are errors in the given object
 * @param {Object} errorMessages
 * @returns boolean
 */
export const areErrorsPresent = (errorMessages) => !Object.values(errorMessages).some((error) => (error !== ''));

/**
 * calls the service methods to validate the object against
 * @param {Object} formValues
 * @returns Object of error messages
 */
export const validateForm = (formValues) => {
  const errorMessages = {};
  errorMessages.email = isEmailValid(formValues?.email);
  errorMessages.firstName = isFirstNameValid(formValues?.firstName);
  errorMessages.lastName = isLastNameValid(formValues?.lastName);
  errorMessages.city = isCityValid(formValues?.city);
  errorMessages.state = isStateValid(formValues?.state);
  errorMessages.street = isStreetValid(formValues?.street);
  errorMessages.postal = isPostalValid(formValues?.postal);
  errorMessages.ssn = isSSNValid(formValues?.ssn);
  errorMessages.weight = isWeightValid(formValues?.weight);
  errorMessages.age = isAgeValid(formValues?.age);
  errorMessages.gender = isGenderValid(formValues?.gender);
  errorMessages.insurance = isInsuranceValid(formValues?.insurance);
  errorMessages.height = isHeightValid(formValues?.height);

  return errorMessages;
};
