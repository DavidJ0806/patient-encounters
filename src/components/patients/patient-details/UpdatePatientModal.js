import * as React from 'react';
import Modal from '../../modal-page/Modal';

/**
 * Update Patient Modal
 * @returns Component
 */
const UpdatePatientModal = ({
  showModal, setShowModal, patientInfo, onPatientChange, errorMessages, updatePatient
}) => (
  <Modal
    showModal={showModal}
    setShowModal={() => setShowModal(false)}
    patientsPage
  >
    <span style={{ fontWeight: 'bold' }}>
      Update Patient Details
    </span>
    <div style={{ borderBottom: '1px solid black', marginBottom: '10px' }} />
    <div style={{ fontWeight: 'bold', fontSize: '15px' }}>
      <span style={{ display: 'block' }}>
        First name:
        {' '}
        <input
          defaultValue={patientInfo.firstName}
          id="firstName"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.firstName ? errorMessages.firstName : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Last name:
        {' '}
        <input
          defaultValue={patientInfo.lastName}
          id="lastName"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.lastName ? errorMessages.lastName : <br />}
      </div>
      <span style={{ display: 'block' }}>
        SSN:
        {' '}
        <input
          defaultValue={patientInfo.ssn}
          id="ssn"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.ssn ? errorMessages.ssn : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Email:
        {' '}
        <input
          defaultValue={patientInfo.email}
          id="email"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.email ? errorMessages.email : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Street:
        {' '}
        <input
          defaultValue={patientInfo.street}
          id="street"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.street ? errorMessages.street : <br />}
      </div>
      <span style={{ display: 'block' }}>
        City:
        {' '}
        <input
          defaultValue={patientInfo.city}
          id="city"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.city ? errorMessages.city : <br />}
      </div>
      <span style={{ display: 'block' }}>
        State:
        {' '}
        <input
          defaultValue={patientInfo.state}
          id="state"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.state ? errorMessages.state : <br />}
      </div>
      <span style={{ display: 'block' }}>
        ZipCode:
        {' '}
        <input
          defaultValue={patientInfo.postal}
          id="postal"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.postal ? errorMessages.postal : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Age:
        {' '}
        <input
          defaultValue={patientInfo.age}
          id="age"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.age ? errorMessages.age : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Height inches:
        {' '}
        <input
          defaultValue={patientInfo.height}
          id="height"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.height ? errorMessages.height : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Weight lbs:
        {' '}
        <input
          defaultValue={patientInfo.weight}
          id="weight"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.weight ? errorMessages.weight : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Insurance:
        {' '}
        <input
          defaultValue={patientInfo.insurance}
          id="insurance"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.insurance ? errorMessages.insurance : <br />}
      </div>
      <span style={{ display: 'block' }}>
        Gender:
        {' '}
        <input
          defaultValue={patientInfo.gender}
          id="gender"
          onChange={onPatientChange}
        />
      </span>
      <div style={{
        maxHeight: '15px', fontSize: '12px', marginTop: '-6px', color: 'red'
      }}
      >
        {errorMessages.gender ? errorMessages.gender : <br />}
      </div>
    </div>
    <div>
      <button type="submit" onClick={updatePatient}> Submit </button>
      <button type="button" onClick={() => setShowModal(false)}>Close</button>
    </div>
  </Modal>
);

export default UpdatePatientModal;
