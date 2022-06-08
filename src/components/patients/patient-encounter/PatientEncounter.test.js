import {
  render, screen
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PatientEncounter from './PatientEncounter';

jest.mock('axios');
const encounterId = 1;
const patientId = 1;
const deleteTracker = false;
const setDeleteTracker = jest.fn();

beforeEach(() => {
  render(
    <BrowserRouter>
      <PatientEncounter
        encounterId={encounterId}
        patientId={patientId}
        deleteTracker={deleteTracker}
        setDeleteTracker={setDeleteTracker}
      />
    </BrowserRouter>
  );
});
it('renders', () => {
  const containerDiv = screen.getByTestId('container div');
  expect(containerDiv).toBeInTheDocument();
});
