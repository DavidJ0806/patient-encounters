import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import Patients from './Patients';

const deleteTracker = false;
const setDeleteTracker = jest.fn();
const setPatientId = jest.fn();
jest.mock('axios');
const patientData = [{
  id: 1, firstName: 'Hulk', lastName: 'Hogan', ssn: '123-45-6789', email: 'hulksnewemailaddress@wwf.com', street: '8430 W Sunset Blvd', city: 'Los Angeles', state: 'CA', postal: '90049', age: 66, height: 79, weight: 299, insurance: 'Self-Insured', gender: 'Male'
}, {
  id: 2, firstName: 'Amir', lastName: 'Hogan', ssn: '123-45-6789', email: 'hulksnewemaddress@wwf.com', street: '8430 W Sunset Blvd', city: 'Los Angeles', state: 'CA', postal: '90049', age: 13, height: 79, weight: 299, insurance: 'Self-Insured', gender: 'Male'
}, {
  id: 3, firstName: 'David', lastName: 'Johnson', ssn: '123-45-6789', email: 'd@wwf.com', street: '8430 W Sunset Blvd', city: 'Los Angeles', state: 'CA', postal: '90049', age: 66, height: 79, weight: 299, insurance: 'Self-Insured', gender: 'Male'
}];
const newPatient = {
  id: 1, firstName: 'Hulk', lastName: 'Hogan', ssn: '123-45-6789', email: 'hulksnewemailaddress@wwf.com', street: '8430 W Sunset Blvd', city: 'Los Angeles', state: 'CA', postal: '90049', age: 66, height: 79, weight: 299, insurance: 'Self-Insured', gender: 'Male'
};
it('create button exists and is clickable', async () => {
  act(() => {
    axios.get.mockImplementation(() => Promise.resolve({
      status: 200,
      data: patientData
    }));
  });
  render(<BrowserRouter>
    <Patients
      deleteTracker={deleteTracker}
      setDeleteTracker={setDeleteTracker}
      setPatientId={setPatientId}
    />
    {/* eslint-disable-next-line react/jsx-indent */}
         </BrowserRouter>);
  const createButton = screen.getByRole('button', {
    name: /create/i
  });
  fireEvent.click(createButton);
  const createPatientText = await screen.findByText(/create patient/i);
  expect(createPatientText).toBeInTheDocument();
});

it('api error is true when response is rejected', async () => {
  act(() => {
    axios.get.mockImplementation(() => Promise.reject(new Error('error')));
  });
  render(<BrowserRouter>
    <Patients
      deleteTracker={deleteTracker}
      setDeleteTracker={setDeleteTracker}
      setPatientId={setPatientId}
    />
    {/* eslint-disable-next-line react/jsx-indent */}
         </BrowserRouter>);
  const apiErrorText = await screen.findByText(/An error occurred. Please try your request again later./i);
  expect(apiErrorText).toBeInTheDocument();
});

it('create button exists and is clickable', async () => {
  axios.get.mockImplementation(() => Promise.resolve({
    status: 200,
    data: patientData
  }));
  axios.delete.mockImplementation(() => Promise.reject(new Error('Request failed with status code 409')));
  render(<BrowserRouter>
    <Patients
      deleteTracker={deleteTracker}
      setDeleteTracker={setDeleteTracker}
      setPatientId={setPatientId}
    />
    {/* eslint-disable-next-line react/jsx-indent */}
         </BrowserRouter>);
  const deleteButton = await screen.findByTestId('test: 1');
  fireEvent.click(deleteButton);
  const clickableDiv = await screen.findByTestId('clickable div: 1');
  fireEvent.click(clickableDiv);
  const patientsText = await screen.findByText(/patients/i);
  expect(patientsText).toBeInTheDocument();
});

it('allows user to submit data', async () => {
  act(() => {
    axios.get.mockImplementation(() => Promise.resolve({
      status: 200,
      data: patientData
    }));
  });
  act(() => {
    axios.post.mockImplementation(() => Promise.resolve({
      status: 201,
      data: newPatient
    }));
  });
  render(<BrowserRouter>
    <Patients
      deleteTracker={deleteTracker}
      setDeleteTracker={setDeleteTracker}
      setPatientId={setPatientId}
    />
    {/* eslint-disable-next-line react/jsx-indent */}
         </BrowserRouter>);
  const createButton = await screen.findByRole('button', {
    name: /create/i
  });
  fireEvent.click(createButton);
  const firstNameInput = await screen.findByPlaceholderText('ex: George');
  fireEvent.change(firstNameInput, { target: { value: 'geroge' } });
  const lastNameInput = await screen.findByPlaceholderText('ex: Smith');
  fireEvent.change(lastNameInput, { target: { value: 'smith' } });
  const SSNInput = await screen.findByPlaceholderText('ex: 123-12-1234');
  fireEvent.change(SSNInput, { target: { value: '123-12-1234' } });
  const emailInput = await screen.findByPlaceholderText('ex: d@j.com');
  fireEvent.change(emailInput, { target: { value: 'd@j.com' } });
  const streetInput = await screen.findByPlaceholderText('ex: Leaf');
  fireEvent.change(streetInput, { target: { value: 'leaf' } });
  const stateInput = await screen.findByPlaceholderText('ex: CO');
  fireEvent.change(stateInput, { target: { value: 'CA' } });
  const cityInput = await screen.findByPlaceholderText('ex: Denver');
  fireEvent.change(cityInput, { target: { value: 'denver' } });
  const postalInput = await screen.findByPlaceholderText('ex: 92345');
  fireEvent.change(postalInput, { target: { value: '92345' } });
  const ageInput = await screen.findByPlaceholderText('ex: 21');
  fireEvent.change(ageInput, { target: { value: '22' } });
  const heightInput = await screen.findByPlaceholderText('ex: 72');
  fireEvent.change(heightInput, { target: { value: '12' } });
  const weightInput = await screen.findByPlaceholderText('ex: 200');
  fireEvent.change(weightInput, { target: { value: '21' } });
  const insuranceInput = await screen.findByPlaceholderText('ex: Self-Insured');
  fireEvent.change(insuranceInput, { target: { value: 'self insurance' } });
  const genderInput = await screen.findByPlaceholderText('ex: Male, Female, Other');
  fireEvent.change(genderInput, { target: { value: 'Male' } });
  const submitButton = await screen.findByRole('button', {
    name: /submit/i
  });
  act(() => {
    fireEvent.click(submitButton);
  });
  expect(screen.getByText(/patients/i)).toBeInTheDocument();
});

it('shows that email is taken', async () => {
  act(() => {
    axios.get.mockImplementation(() => Promise.resolve({
      status: 200,
      data: patientData
    }));
  });
  act(() => {
    axios.post.mockImplementation(() => Promise.reject(new Error('Request failed with status code 409')));
  });
  render(<BrowserRouter>
    <Patients
      deleteTracker={deleteTracker}
      setDeleteTracker={setDeleteTracker}
      setPatientId={setPatientId}
    />
    {/* eslint-disable-next-line react/jsx-indent */}
         </BrowserRouter>);
  const createButton = await screen.findByRole('button', {
    name: /create/i
  });
  fireEvent.click(createButton);
  const firstNameInput = await screen.findByPlaceholderText('ex: George');
  fireEvent.change(firstNameInput, { target: { value: 'geroge' } });
  const lastNameInput = await screen.findByPlaceholderText('ex: Smith');
  fireEvent.change(lastNameInput, { target: { value: 'smith' } });
  const SSNInput = await screen.findByPlaceholderText('ex: 123-12-1234');
  fireEvent.change(SSNInput, { target: { value: '123-12-1234' } });
  const emailInput = await screen.findByPlaceholderText('ex: d@j.com');
  fireEvent.change(emailInput, { target: { value: 'd@j.com' } });
  const streetInput = await screen.findByPlaceholderText('ex: Leaf');
  fireEvent.change(streetInput, { target: { value: 'leaf' } });
  const stateInput = await screen.findByPlaceholderText('ex: CO');
  fireEvent.change(stateInput, { target: { value: 'CA' } });
  const cityInput = await screen.findByPlaceholderText('ex: Denver');
  fireEvent.change(cityInput, { target: { value: 'denver' } });
  const postalInput = await screen.findByPlaceholderText('ex: 92345');
  fireEvent.change(postalInput, { target: { value: '92345' } });
  const ageInput = await screen.findByPlaceholderText('ex: 21');
  fireEvent.change(ageInput, { target: { value: '22' } });
  const heightInput = await screen.findByPlaceholderText('ex: 72');
  fireEvent.change(heightInput, { target: { value: '12' } });
  const weightInput = await screen.findByPlaceholderText('ex: 200');
  fireEvent.change(weightInput, { target: { value: '21' } });
  const insuranceInput = await screen.findByPlaceholderText('ex: Self-Insured');
  fireEvent.change(insuranceInput, { target: { value: 'self insurance' } });
  const genderInput = await screen.findByPlaceholderText('ex: Male, Female, Other');
  fireEvent.change(genderInput, { target: { value: 'Male' } });
  const submitButton = await screen.findByRole('button', {
    name: /submit/i
  });
  act(() => {
    fireEvent.click(submitButton);
  });
  expect(await screen.findByText(/Email is taken/i)).toBeInTheDocument();
});
