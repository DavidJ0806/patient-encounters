import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Constants from '../../../utils/constants';
import styles from '../Patients.module.css';
import { validateForm, areErrorsPresent } from '../PatientService';
import { areEncounterErrorsPresent, validateEncounterForm } from './CreateEncounterService';
import UpdatePatientModal from './UpdatePatientModal';
import CreateEncounterModal from './CreateEncounterModal';

const theme = createTheme();

/**
 * Patient Details Component
 * @returns Component
 */
const PatientDetails = ({
  patientId, setEncounterId, deleteTracker, setDeleteTracker
}) => {
  const [apiError, setApiError] = React.useState(false);
  const [patientInfo, setPatientInfo] = React.useState({});
  const [encounterInfo, setEncounterInfo] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [showEncounterModal, setShowEncounterModal] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState({});
  const [errorEncounterMessages, setErrorEncounterMessages] = React.useState({});
  const [newEncounter, setNewEncounter] = React.useState({
    patientId,
    notes: '',
    visitCode: '',
    provider: '',
    billingCode: '',
    icd10: '',
    totalCost: '',
    copay: '',
    chiefComplaint: '',
    pulse: '',
    systolic: '',
    diastolic: '',
    date: ''
  });
  const [editPatient, setEditPatient] = React.useState({
    firstName: '',
    lastName: '',
    ssn: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postal: '',
    age: '',
    height: '',
    weight: '',
    insurance: '',
    gender: ''
  });

  const navigate = useNavigate();

  // fetches data on initial load
  React.useEffect(() => {
    const getData = async () => {
      await axios.get(Constants.PATIENTS_ENDPOINT + patientId).then((res) => {
        const { data } = res;
        setPatientInfo(data);
      })
        .catch(() => {
          setApiError(true);
        });
    };
    const getEncounterData = async () => {
      await axios.get(`${Constants.PATIENTS_ENDPOINT + patientId}/encounters`).then((res) => {
        const { data } = res;
        setEncounterInfo(data);
      })
        .catch(() => {
          setApiError(true);
        });
    };
    getEncounterData();
    getData();
  }, [patientId, deleteTracker]);

  /**
   * Handler for the update button
   */
  const handleEditPress = () => {
    setEditPatient({
      firstName: patientInfo.firstName,
      lastName: patientInfo.lastName,
      ssn: patientInfo.ssn,
      email: patientInfo.email,
      street: patientInfo.street,
      city: patientInfo.city,
      state: patientInfo.state,
      postal: patientInfo.postal,
      age: patientInfo.age,
      height: patientInfo.height,
      weight: patientInfo.weight,
      insurance: patientInfo.insurance,
      gender: patientInfo.gender
    });
    setErrorMessages({});
    setShowModal(true);
  };

  /**
   * Navigates to the next page
   * @param {Number} id
   */
  const handleSubmit = (id) => {
    setEncounterId(id);
    sessionStorage.setItem('encounterId', id);
    navigate(`/patients/${patientId}/details/encounters/${id}`);
  };

  /**
   * Handles state when an input is changed
   * @param {Event} e
   */
  const onPatientChange = (e) => {
    setEditPatient({ ...editPatient, [e.target.id]: e.target.value });
  };

  /**
   * Key press handler incase key presses need to be implemented
   */
  const onKeyPressHandler = () => {
  };

  /**
   * makes the api call to the backend and validates the form
   */
  const updatePatient = async () => {
    const errors = validateForm(editPatient);
    setErrorMessages(errors);
    if (areErrorsPresent(errors)) {
      await axios.put(Constants.PATIENTS_ENDPOINT + patientInfo.id, editPatient)
        .then(() => setShowModal(false))
        .catch((response) => {
          if (response.toString() === Constants.STATUS_409) {
            setErrorMessages({ ...errorMessages, email: 'Email is taken' });
          }
        });
      setDeleteTracker(!deleteTracker);
    }
  };

  /**
   * handler to set the state of the encounter when an input is changed
   */
  const onEncounterChange = (e) => {
    setNewEncounter({ ...newEncounter, [e.target.id]: e.target.value });
  };

  /**
   * calls the api to create a new encounter and validates the form
   */
  const submitNewEncounter = async () => {
    const errors = validateEncounterForm(newEncounter);
    setErrorEncounterMessages(errors);
    if (areEncounterErrorsPresent(errors)) {
      await axios.post(`${Constants.PATIENTS_ENDPOINT + patientInfo.id}/encounters`, newEncounter)
        .then(() => setShowEncounterModal(false))
        .catch(() => {
          setApiError(true);
        });
      setDeleteTracker(!deleteTracker);
    }
  };

  /**
   * Opens the modal and resets the state of the encounter
   */
  const handleNewEncounter = () => {
    setNewEncounter({
      patientId,
      notes: '',
      visitCode: '',
      provider: '',
      billingCode: '',
      icd10: '',
      totalCost: '',
      copay: '',
      chiefComplaint: '',
      pulse: '',
      systolic: '',
      diastolic: '',
      date: ''
    });
    setErrorEncounterMessages({});
    setShowEncounterModal(true);
  };

  return (
    <>
      <UpdatePatientModal
        showModal={showModal}
        setShowModal={setShowModal}
        patientInfo={patientInfo}
        onPatientChange={onPatientChange}
        errorMessages={errorMessages}
        updatePatient={updatePatient}
      />
      <CreateEncounterModal
        showModal={showEncounterModal}
        setShowModal={setShowEncounterModal}
        onEncounterChange={onEncounterChange}
        errorMessages={errorEncounterMessages}
        submitNewEncounter={submitNewEncounter}
      />
      {apiError && (<p>{Constants.API_ERROR}</p>)}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              border: '1px solid black',
              backgroundColor: '#DCDCDC',
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '400px',
              marginBottom: 8
            }}
          >
            <Grid container justifyContent="flex-start">
              <ArrowBackIcon style={{ cursor: 'pointer' }} onClick={() => navigate('/patients')} />
            </Grid>
            <Box noValidate sx={{ mt: 1, marginTop: '-20px' }}>
              <h2 style={{ color: '#1976d2' }}> Patient details</h2>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ borderBottom: '1px solid black', marginTop: '-10px', marginBottom: '5px' }} />
                <div>
                  <span className={styles.reservationsTitle}>First name:</span>
                  {' '}
                  {patientInfo.firstName && patientInfo.firstName}
                  <br />
                  <span className={styles.reservationsTitle}> Last name:</span>
                  {' '}
                  {patientInfo.lastName && patientInfo.lastName}
                  <br />
                  <span className={styles.reservationsTitle}> SSN:</span>
                  {' '}
                  {patientInfo.ssn && patientInfo.ssn}
                  <br />
                  <span className={styles.reservationsTitle}>Email:</span>
                  {' '}
                  {patientInfo.email && patientInfo.email}
                  <br />
                  <span className={styles.reservationsTitle}>Street:</span>
                  {' '}
                  {patientInfo.street && patientInfo.street}
                  <br />
                  <span className={styles.reservationsTitle}>City:</span>
                  {' '}
                  {patientInfo.city && patientInfo.city}
                  <br />
                  <span className={styles.reservationsTitle}>State:</span>
                  {' '}
                  {patientInfo.state && patientInfo.state}
                  <br />
                  <span className={styles.reservationsTitle}>Zipcode:</span>
                  {' '}
                  {patientInfo.postal && patientInfo.postal}
                  <br />
                  <span className={styles.reservationsTitle}>Age:</span>
                  {' '}
                  {patientInfo.age && patientInfo.age}
                  <br />
                  <span className={styles.reservationsTitle}>Height:</span>
                  {' '}
                  {patientInfo.height && patientInfo.height}
                  <br />
                  <span className={styles.reservationsTitle}>Weight:</span>
                  {' '}
                  {patientInfo.weight && patientInfo.weight}
                  <br />
                  <span className={styles.reservationsTitle}>Insurance:</span>
                  {' '}
                  {patientInfo.insurance && patientInfo.insurance}
                  <br />
                  <span className={styles.reservationsTitle}>Gender:</span>
                  {' '}
                  {patientInfo.gender && patientInfo.gender}
                  <br />
                </div>
                <button className={styles.button} type="button" onClick={handleEditPress}>Update Details</button>
                <h2 style={{ color: '#1976d2' }}> Patient encounters</h2>
                <div style={{ borderBottom: '1px solid black', marginTop: '-10px', marginBottom: '5px' }} />
                {encounterInfo.length === 0 && "They've never showed up..."}
                {Object.values(encounterInfo).map((encounter) => (
                  <div
                    key={encounter.id}
                  >
                    <div
                      onClick={() => handleSubmit(encounter.id)}
                      onKeyPress={onKeyPressHandler}
                      role="button"
                      data-testid={`clickable div: ${encounter.id}`}
                      style={{ cursor: 'pointer' }}
                      className={styles.tooltip}
                      tabIndex={0}
                    >
                      <span className={styles.tooltiptext}>
                        Click for this encounter&apos;s details
                      </span>
                      <span className={styles.reservationsTitle}>
                        ID:
                      </span>
                      {' '}
                      {encounter.id}
                      {'\n'}
                      <span className={styles.reservationsTitle}>
                        Visit Code:
                      </span>
                      {' '}
                      {encounter.visitCode}
                      {'\n'}
                      <span className={styles.reservationsTitle}>Date:</span>
                      {' '}
                      {encounter.date}
                      {'\n'}
                      <span className={styles.reservationsTitle}>Provder:</span>
                      {' '}
                      {encounter.provider}
                      <br />
                    </div>
                    {' '}
                    <div style={{ borderBottom: '1px solid #cccccc', marginTop: '8px' }} />
                  </div>
                ))}
                <button className={styles.button} type="button" onClick={handleNewEncounter}>Create New Encounter</button>
              </div>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default PatientDetails;
