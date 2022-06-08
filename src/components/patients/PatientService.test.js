import * as Validation from './PatientService';

describe('Street Validation', () => {
  const streetMsg = 'Street is required';
  it('returns error message if not valid', () => {
    expect(Validation.isStreetValid('')).toEqual(streetMsg);
  });
  it('returns blank if pass validation', () => {
    expect(Validation.isStreetValid('Street')).toEqual('');
  });
});

describe('Email Validation', () => {
  const emailMsg = 'A valid email is required.';
  it('returns error message if not valid', () => {
    expect(Validation.isEmailValid('')).toEqual(emailMsg);
  });
  it('returns blank if pass validation', () => {
    expect(Validation.isEmailValid('d@j.c')).toEqual('');
  });
});

describe('First name validation', () => {
  const firstMsg = "First name accepts letters and a - or '.";
  it('returns error message if not valid', () => {
    expect(Validation.isFirstNameValid('')).toEqual(firstMsg);
  });
  it('returns blank if pass validation', () => {
    expect(Validation.isFirstNameValid('David')).toEqual('');
  });
});

describe('Last name validation', () => {
  const lastMsg = "Last name accepts letters and a - or '.";
  it('returns error message if not valid', () => {
    expect(Validation.isLastNameValid('')).toEqual(lastMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isLastNameValid('David')).toEqual('');
  });
});

describe('City validation', () => {
  const cityMsg = 'City is required.';
  it('returns error message if not valid', () => {
    expect(Validation.isCityValid('')).toEqual(cityMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isCityValid('City')).toEqual('');
  });
});

describe('State validation', () => {
  const stateMsg = 'A valid abbreviation of a US state is required.';
  it('returns error message if not valid', () => {
    expect(Validation.isStateValid('C2')).toEqual(stateMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isStateValid('CA')).toEqual('');
  });
});

describe('Postal code validation', () => {
  const postalMsg = 'Zip must follow format 12345 or 12345-1234.';
  it('returns error message if not valid', () => {
    expect(Validation.isPostalValid('21')).toEqual(postalMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isPostalValid('12345')).toEqual('');
  });
});

describe('SSN validation', () => {
  const SSNMsg = 'SSN must follow the format 123-12-1234.';
  it('returns error message if not valid', () => {
    expect(Validation.isSSNValid('')).toEqual(SSNMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isSSNValid('123-12-1234')).toEqual('');
  });
});

describe('Age validation', () => {
  const ageMsg = 'A valid age is required.';
  it('returns error message if not valid', () => {
    expect(Validation.isAgeValid('')).toEqual(ageMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isAgeValid('5')).toEqual('');
  });
});

describe('Weight validation', () => {
  const weightMsg = 'A valid weight in lbs is required';
  it('returns error message if not valid', () => {
    expect(Validation.isWeightValid('')).toEqual(weightMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isWeightValid('4')).toEqual('');
  });
});

describe('Gender validation', () => {
  const genderMsg = "Gender must be 'Male', 'Female', or 'Other'.";
  it('returns error message if not valid', () => {
    expect(Validation.isGenderValid('')).toEqual(genderMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isGenderValid('Male')).toEqual('');
  });
});

describe('Insurance validation', () => {
  const insuranceMsg = 'Insurance is required.';
  it('returns error message if not valid', () => {
    expect(Validation.isInsuranceValid('')).toEqual(insuranceMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isInsuranceValid('valid insurance')).toEqual('');
  });
});

describe('Height validation', () => {
  const heightMsg = 'A valid height in inches is required';
  it('returns error message if not valid', () => {
    expect(Validation.isHeightValid('')).toEqual(heightMsg);
  });
  it('returns blank if valid', () => {
    expect(Validation.isHeightValid('15')).toEqual('');
  });
});

describe('areErrorsPresent tests', () => {
  it('returns true if no errors', () => {
    const errors = {};
    expect(Validation.areErrorsPresent(errors)).toEqual(true);
  });
  it('returns false if errors', () => {
    const errors = {
      key: 'value'
    };
    expect(Validation.areErrorsPresent(errors)).toEqual(false);
  });
});

describe('validateForm tests', () => {
  it('returns blank error objects when no errors present', () => {
    const formValues = {
      email: 'd@j.c',
      firstName: 'd',
      lastName: 'd',
      city: 'CA',
      state: 'CA',
      street: 'street',
      postal: '12345',
      ssn: '123-12-1234',
      weight: '12',
      age: '12',
      gender: 'Male',
      insurance: 'me',
      height: '12'
    };
    expect(Validation.validateForm(formValues)).toEqual({
      email: '',
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      street: '',
      postal: '',
      ssn: '',
      weight: '',
      age: '',
      gender: '',
      insurance: '',
      height: ''
    });
  });
});
