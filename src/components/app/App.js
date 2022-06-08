import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
// import PrivateRoute from '../private-route/PrivateRoute';
import Patients from '../patients/Patients';
import PatientDetails from '../patients/patient-details/PatientDetails';
import PatientEncounter from '../patients/patient-encounter/PatientEncounter';

/**
 * App
 * @returns component
 */
export default function App() {
  // helper tracker to refetch data when needed
  const [deleteTracker, setDeleteTracker] = React.useState(false);
  // helper state in order to preserve data through page refreshes
  const [patientId, setPatientId] = React.useState(sessionStorage.getItem('patientId'));
  const [encounterId, setEncounterId] = React.useState(sessionStorage.getItem('encounterId'));

  return (
    <BrowserRouter>
      <div id="page-container">
        <Routes>
          <Route path="/" element={<Patients setPatientId={setPatientId} deleteTracker={deleteTracker} setDeleteTracker={setDeleteTracker} />} />
          <Route path="/patients" element={<Patients setPatientId={setPatientId} deleteTracker={deleteTracker} setDeleteTracker={setDeleteTracker} />} />
          <Route path="/patients/:id/details" element={<PatientDetails deleteTracker={deleteTracker} setDeleteTracker={setDeleteTracker} setEncounterId={setEncounterId} patientId={patientId} />} />
          <Route path="/patients/:id/details/encounters/:id" element={<PatientEncounter deleteTracker={deleteTracker} setDeleteTracker={setDeleteTracker} patientId={patientId} encounterId={encounterId} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
