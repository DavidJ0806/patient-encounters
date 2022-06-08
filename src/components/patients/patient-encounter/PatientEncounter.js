/* eslint-disable no-unused-vars */
import * as React from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import styles from '../Patients.module.css';
import Constants from '../../../utils/constants';
import UpdateEncounterModal from './UpdateEncounterModal';
import { areEncounterErrorsPresent, validateEncounterForm } from '../patient-details/CreateEncounterService';

const theme = createTheme();

/**
 * Patient Encounter
 * @returns Component
 */
const PatientEncounter = ({
  encounterId, patientId, deleteTracker, setDeleteTracker
}) => {
  const [encounterInfo, setEncounterInfo] = React.useState({});
  const [apiError, setApiError] = React.useState(false);
  const [showEncounterModal, setShowEncounterModal] = React.useState(false);
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
  const navigate = useNavigate();

  // sets the data on page load
  React.useEffect(() => {
    const getEncounterData = async () => {
      await axios.get(`${Constants.PATIENTS_ENDPOINT + patientId}/encounters/${encounterId}`).then((res) => {
        const { data } = res;
        setEncounterInfo(data);
      })
        .catch(() => {
          setApiError(true);
        });
    };
    getEncounterData();
  }, [encounterId, patientId, deleteTracker]);

  /**
   * opens the modal and sets the encounter info
   */
  const handleEditPress = () => {
    // response data sends back 10 instead of 10.00
    setNewEncounter({
      ...encounterInfo,
      totalCost: encounterInfo.totalCost.toFixed(2),
      copay: encounterInfo.copay.toFixed(2)
    });
    setErrorEncounterMessages({});
    setShowEncounterModal(true);
  };

  /**
   * handles the state for when an input changes
   * @param {Event} e
   */
  const onEncounterChange = (e) => {
    setNewEncounter({ ...newEncounter, [e.target.id]: e.target.value });
  };

  /**
   * makes the api call to update an existing encounter
   */
  const updateNewEncounter = async () => {
    const errors = validateEncounterForm(newEncounter);
    setErrorEncounterMessages(errors);
    if (areEncounterErrorsPresent(errors)) {
      await axios.put(`${Constants.PATIENTS_ENDPOINT + patientId}/encounters/${encounterId}`, newEncounter)
        .then(() => setShowEncounterModal(false))
        .catch(() => {
          setApiError(true);
        });
      setDeleteTracker(!deleteTracker);
    }
  };

  return (
    <div data-testid="container div">
      {apiError && (<p>{Constants.API_ERROR}</p>)}
      <UpdateEncounterModal
        showModal={showEncounterModal}
        setShowModal={setShowEncounterModal}
        onEncounterChange={onEncounterChange}
        errorMessages={errorEncounterMessages}
        updateNewEncounter={updateNewEncounter}
        encounterInfo={encounterInfo}
      />
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
            <Grid container justifyContent="flex-start">
              <ArrowBackIcon style={{ cursor: 'pointer' }} onClick={() => navigate(`/patients/${patientId}/details`)} />
            </Grid>
            <Box noValidate sx={{ mt: 1, marginTop: '-20px' }}>
              <h2 style={{ color: '#1976d2' }}> Encounter details</h2>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ borderBottom: '1px solid black', marginTop: '-10px', marginBottom: '5px' }} />
                <div>
                  <span className={styles.reservationsTitle}>ID:</span>
                  {' '}
                  {encounterInfo.id}
                  <br />
                  <span className={styles.reservationsTitle}>Patient ID:</span>
                  {' '}
                  {encounterInfo.patientId}
                  <br />
                  <span className={styles.reservationsTitle}> Notes:</span>
                  {' '}
                  {encounterInfo.notes}
                  <br />
                  <span className={styles.reservationsTitle}>Visit Code:</span>
                  {' '}
                  {encounterInfo.visitCode}
                  <br />
                  <span className={styles.reservationsTitle}>Provider:</span>
                  {' '}
                  {encounterInfo.provider}
                  <br />
                  <span className={styles.reservationsTitle}>Billing Code:</span>
                  {' '}
                  {encounterInfo.billingCode}
                  <br />
                  <span className={styles.reservationsTitle}>ICD10 Code:</span>
                  {' '}
                  {encounterInfo.icd10}
                  <br />
                  <span className={styles.reservationsTitle}>Total Cost:</span>
                  {' '}
                  {encounterInfo.totalCost && encounterInfo.totalCost.toFixed(2)}
                  <br />
                  <span className={styles.reservationsTitle}>Copay:</span>
                  {' '}
                  {encounterInfo.copay && encounterInfo.copay.toFixed(2)}
                  <br />
                  <span className={styles.reservationsTitle}>Initial Complaint:</span>
                  {' '}
                  {encounterInfo.chiefComplaint}
                  <br />
                  <span className={styles.reservationsTitle}>Pulse:</span>
                  {' '}
                  {encounterInfo.pulse}
                  <br />
                  <span className={styles.reservationsTitle}>Systolic:</span>
                  {' '}
                  {encounterInfo.systolic}
                  <br />
                  <span className={styles.reservationsTitle}>diastolic:</span>
                  {' '}
                  {encounterInfo.diastolic}
                  <br />
                  <span className={styles.reservationsTitle}>Date:</span>
                  {' '}
                  {encounterInfo.date}
                  <br />
                </div>
                <button className={styles.button} type="button" onClick={handleEditPress}>Update Encounter</button>
              </div>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default PatientEncounter;
