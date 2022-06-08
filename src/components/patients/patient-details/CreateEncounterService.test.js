import * as Validation from './CreateEncounterService';

// testing service as a cohesive unit, since that is how
// it is used (and it saves time)
describe('validation integration tests', () => {
  const errorMessages = {
    date: 'Date must follow format YYYY-MM-DD.',
    diastolic: 'Diastolic is optional but must be a number.',
    systolic: 'Systolic is optional but must be a number.',
    pulse: 'Pulse is optional but must be a number.',
    chiefComplaint: 'Chief Complaint is required.',
    copay: "Copay must have two decimal places - '12.99'.",
    totalCost: "Cost must have two decimal places - '12.99'.",
    icd10: "Must follow format example 'A22'.",
    billingCode: "Must follow the example '123.456.789-12'.",
    provider: 'Provider is required.',
    visitCode: "Must follow format example 'H7J 8W2'.",
    notes: ''
  };
  const formItem1 = {
    date: '1996-12-23',
    diastolic: '',
    systolic: '',
    pulse: '',
    chiefComplaint: 'wow',
    copay: '10.10',
    totalCost: '10.12',
    icd10: 'Z99',
    billingCode: '123.456.789-00',
    provider: 'me',
    visitCode: 'N3W 3C2',
    notes: 'hey'
  };
  const formItem2 = {
    date: '',
    diastolic: '',
    systolic: '',
    pulse: '',
    chiefComplaint: '',
    copay: '',
    totalCost: '',
    icd10: '',
    billingCode: '',
    provider: '',
    visitCode: '',
    notes: ''
  };
  const formItem3 = {
    date: '',
    diastolic: 'a',
    systolic: 'a',
    pulse: 'a',
    chiefComplaint: '',
    copay: '',
    totalCost: '',
    icd10: '',
    billingCode: '',
    provider: '',
    visitCode: '',
    notes: ''
  };
  const formItem4 = {
    date: '1996-12-23',
    diastolic: null,
    systolic: null,
    pulse: null,
    chiefComplaint: 'wow',
    copay: '10.10',
    totalCost: '10.12',
    icd10: 'Z99',
    billingCode: '123.456.789-00',
    provider: 'me',
    visitCode: 'N3W 3C2',
    notes: 'hey'
  };
  const formItem5 = {
    date: '1996-12-23',
    diastolic: '42',
    systolic: '42',
    pulse: '42',
    chiefComplaint: 'wow',
    copay: '10.10',
    totalCost: '10.12',
    icd10: 'Z99',
    billingCode: '123.456.789-00',
    provider: 'me',
    visitCode: 'N3W 3C2',
    notes: 'hey'
  };
  it('returns blank error object if valid', () => {
    expect(Validation.validateEncounterForm(formItem1)).toEqual(formItem2);
  });
  it('returns error messages', () => {
    expect(Validation.validateEncounterForm(formItem3)).toEqual(errorMessages);
  });
  it('returns true when testing areEncounterErrorsPresent', () => {
    expect(Validation.areEncounterErrorsPresent(formItem2)).toEqual(true);
  });
  it('returns blank if null', () => {
    expect(Validation.validateEncounterForm(formItem4)).toEqual(formItem2);
  });
  it('returns blank if value is present', () => {
    expect(Validation.validateEncounterForm(formItem5)).toEqual(formItem2);
  });
});
