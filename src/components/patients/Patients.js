import * as React from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Patients.module.css';
import Constants from '../../utils/constants';
import { validateForm, areErrorsPresent } from './PatientService';
import CreatePatientModal from './CreatePatientModal';

const theme = createTheme();

/**
 * Patients
 * @returns Component
 */
const Patients = ({ deleteTracker, setDeleteTracker, setPatientId }) => {
  const [apiError, setApiError] = React.useState(false);
  const [patientData, setPatientData] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [errorId, setErrorId] = React.useState(0);
  const [errorMessages, setErrorMessages] = React.useState({});
  const [patient, setPatient] = React.useState({
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

  // sets the data for the patients
  React.useEffect(() => {
    const getData = async () => {
      await axios.get(Constants.PATIENTS_ENDPOINT).then((res) => {
        const { data } = res;
        setPatientData(data);
      })
        .catch(() => {
          setApiError(true);
        });
    };
    getData();
  }, [deleteTracker]);

  /**
   * navigates to the details page
   * @param {Number} id
   */
  const handleSubmit = (id) => {
    setPatientId(id);
    sessionStorage.setItem('patientId', id);
    navigate(`/patients/${id}/details`);
  };

  /**
   * sends the delete request to the API
   * @param {Number} id
   */
  const handleDeletePress = async (id) => {
    await axios.delete(Constants.PATIENTS_ENDPOINT + id)
      .then(() => setDeleteTracker(!deleteTracker)).catch((response) => {
        if (response.toString() === Constants.STATUS_409) setErrorId(id);
      });
  };

  /**
   * sets up the key press handler for future implementation
   */
  const onKeyPressHandler = () => {
  };

  /**
   * Opens the modal and resets the state for the patient
   */
  const createHandler = () => {
    setPatient({
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
    setErrorMessages({});
    setShowModal(true);
  };

  /**
   * handles the state for patient when an input is changed
   * @param {Event} e
   */
  const onPatientChange = (e) => {
    setPatient({ ...patient, [e.target.id]: e.target.value });
  };

  /**
   * validates patient and makes API call
   */
  const submitNewPatient = async () => {
    const errors = validateForm(patient);
    setErrorMessages(errors);
    if (areErrorsPresent(errors)) {
      await axios.post(Constants.PATIENTS_ENDPOINT, patient).then(() => setShowModal(false))
        .catch((response) => {
          if (response.toString() === Constants.STATUS_409) {
            setErrorMessages({ errorMessages, email: 'Email is taken' });
          }
        });
      setDeleteTracker(!deleteTracker);
    }
  };

  return (
    <div data-testid="test-div">
      <CreatePatientModal
        showModal={showModal}
        setShowModal={setShowModal}
        onPatientChange={onPatientChange}
        errorMessages={errorMessages}
        submitNewPatient={submitNewPatient}
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
              maxWidth: '400px'
            }}
          >
            <Box noValidate sx={{ mt: 1 }}>
              <h2 style={{ color: '#1976d2' }}> Patients </h2>
              <div style={{ borderBottom: '1px solid black', marginTop: '-10px', marginBottom: '5px' }} />
              {Object.values(patientData).map((patientInfo) => (
                <div
                  key={patientInfo.id}
                >
                  <div
                    onClick={() => handleSubmit(patientInfo.id)}
                    onKeyPress={onKeyPressHandler}
                    role="button"
                    data-testid={`clickable div: ${patientInfo.id}`}
                    style={{ cursor: 'pointer' }}
                    className={styles.tooltip}
                    tabIndex={0}
                  >
                    <span className={styles.tooltiptext}>
                      Click for
                      {' '}
                      {patientInfo.firstName}
                      &apos;s
                      {' '}
                      patient details
                    </span>
                    <span className={styles.reservationsTitle}>
                      Name:
                    </span>
                    {' '}
                    {patientInfo.firstName}
                    {' '}
                    {patientInfo.lastName}
                    {'\n'}
                    <span className={styles.reservationsTitle}> Age:</span>
                    {' '}
                    {patientInfo.age}
                    {'\n'}
                    <span className={styles.reservationsTitle}>Gender:</span>
                    {' '}
                    {patientInfo.gender}
                    <br />
                  </div>
                  <button
                    type="button"
                    data-testid={`test: ${patientInfo.id}`}
                    className={styles.button}
                    onClick={() => handleDeletePress(patientInfo.id)}
                  >
                    Delete
                  </button>
                  {' '}
                  {errorId === patientInfo.id && (
                  <span
                    style={{
                      borderBottom: '1px solid red', color: 'red', fontSize: '12.5px', fontWeight: 'bold'
                    }}
                  >
                    Cannot delete a patient with encounters
                  </span>
                  )}
                  <div style={{ borderBottom: '1px solid #cccccc', marginTop: '8px' }} />
                </div>
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={createHandler}
                data-testid="create-button"
              >
                Create
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Patients;
