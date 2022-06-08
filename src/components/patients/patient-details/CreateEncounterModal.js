import * as React from 'react';
import Modal from '../../modal-page/Modal';

/**
 * Incorporates the Modal component
 * @returns Component
 */
const CreateEncounterModal = ({
  showModal, setShowModal, onEncounterChange, errorMessages, submitNewEncounter
}) => (
  <Modal
    showModal={showModal}
    setShowModal={() => setShowModal(false)}
    patientsPage
  >
    <span style={{ fontWeight: 'bold' }}>
      Create Encounter
    </span>
    <div style={{ borderBottom: '1px solid black', marginBottom: '10px' }} />
    <div style={{ fontWeight: 'bold', fontSize: '15px' }}>
      <span style={{ display: 'block' }}>
        Notes:
        {' '}
        <input
          placeholder="ex. New encounter"
          id="notes"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.notes ? errorMessages.notes : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Visit Code:
        {' '}
        <input
          placeholder="ex. N3W 3C3"
          id="visitCode"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.visitCode ? errorMessages.visitCode : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Provider:
        {' '}
        <input
          placeholder="ex: New Hospital"
          id="provider"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.provider ? errorMessages.provider : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Billing Code:
        {' '}
        <input
          placeholder="ex: 123.456.789-00"
          id="billingCode"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.billingCode ? errorMessages.billingCode : <br />}
      </div>
      <span style={{ display: 'block' }}>
        ICD10 Code:
        {' '}
        <input
          placeholder="ex: Z99"
          id="icd10"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.icd10 ? errorMessages.icd10 : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Total Cost:
        {' '}
        <input
          placeholder="ex: 100.99"
          id="totalCost"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.totalCost ? errorMessages.totalCost : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Copay:
        {' '}
        <input
          placeholder="ex: 20.00"
          id="copay"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.copay ? errorMessages.copay : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Chief Complaint:
        {' '}
        <input
          size="19"
          placeholder="ex: New complaint"
          id="chiefComplaint"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.chiefComplaint ? errorMessages.chiefComplaint : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Pulse:
        {' '}
        <input
          placeholder="ex: 80"
          id="pulse"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.pulse ? errorMessages.pulse : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Systolic:
        {' '}
        <input
          placeholder="ex: 80"
          id="systolic"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.systolic ? errorMessages.systolic : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Diastolic:
        {' '}
        <input
          placeholder="ex: 100"
          id="diastolic"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.diastolic ? errorMessages.diastolic : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Date:
        {' '}
        <input
          placeholder="ex: 1999-12-25"
          id="date"
          onChange={onEncounterChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.date ? errorMessages.date : <br />}
      </div>
    </div>
    <div>
      <button type="submit" onClick={submitNewEncounter}> Submit </button>
      <button type="button" onClick={() => setShowModal(false)}>Close</button>
    </div>
  </Modal>
);

export default CreateEncounterModal;
