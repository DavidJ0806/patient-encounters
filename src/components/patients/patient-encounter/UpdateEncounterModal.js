import * as React from 'react';
import Modal from '../../modal-page/Modal';

/**
 * Update Encounter Modal, incorporates modal
 * @returns Component
 */
const UpdateEncounterModal = ({
  showModal, setShowModal, onEncounterChange, errorMessages, updateNewEncounter, encounterInfo
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
          defaultValue={encounterInfo.notes}
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
          defaultValue={encounterInfo.visitCode}
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
          defaultValue={encounterInfo.provider}
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
          defaultValue={encounterInfo.billingCode}
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
          defaultValue={encounterInfo.icd10}
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
          defaultValue={encounterInfo.totalCost && (encounterInfo.totalCost.toFixed(2))}
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
          defaultValue={encounterInfo.copay && (encounterInfo.copay.toFixed(2))}
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
          defaultValue={encounterInfo.chiefComplaint}
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
          defaultValue={encounterInfo.pulse}
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
          defaultValue={encounterInfo.systolic}
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
          defaultValue={encounterInfo.diastolic}
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
          defaultValue={encounterInfo.date}
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
      <button type="submit" onClick={updateNewEncounter}> Submit </button>
      <button type="button" onClick={() => setShowModal(false)}>Close</button>
    </div>
  </Modal>
);

export default UpdateEncounterModal;
