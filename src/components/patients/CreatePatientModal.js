import * as React from 'react';
import Modal from '../modal-page/Modal';

/**
 * Create Patient Modal, incorporates modal
 * @returns Component
 */
const CreatePatientModal = ({
  showModal, setShowModal, onPatientChange, errorMessages, submitNewPatient
}) => (
  <Modal
    showModal={showModal}
    setShowModal={() => setShowModal(false)}
    patientsPage
  >
    <span style={{ fontWeight: 'bold' }}>
      Create Patient
    </span>
    <div style={{ borderBottom: '1px solid black', marginBottom: '10px' }} />
    <div style={{ fontWeight: 'bold', fontSize: '15px' }}>
      <span style={{ display: 'block' }}>
        First name:
        {' '}
        <input
          placeholder="ex: George"
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
          placeholder="ex: Smith"
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
          placeholder="ex: 123-12-1234"
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
          placeholder="ex: d@j.com"
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
          placeholder="ex: Leaf"
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
          placeholder="ex: Denver"
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
          placeholder="ex: CO"
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
          placeholder="ex: 92345"
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
          placeholder="ex: 21"
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
          placeholder="ex: 72"
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
          placeholder="ex: 200"
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
          placeholder="ex: Self-Insured"
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
          placeholder="ex: Male, Female, Other"
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
      <button type="submit" onClick={submitNewPatient}> Submit </button>
      <button type="button" onClick={() => setShowModal(false)}>Close</button>
    </div>
  </Modal>
);

export default CreatePatientModal;
