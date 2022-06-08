import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 1);
  background: #d3d3d3;
  margin-left: auto;
  margin-right: auto;
  overflow: 'auto';
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 1000;
  border-radius: 5px;
`;

const MaintenanceModalWrapper = styled(ModalWrapper)`
  width: 400px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr;
  line-height: 1.8;
  .no-button {
    background-color: red;
  }
  div {
    width: 90%;
    margin: auto;
    text-align: center;
  }
  button {
    margin-top: 5px;
    margin-right: 5px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: Arial;
    font-size: 15px;
    font-weight: 100;
    padding: 7px;
    background-color: #1976D2;
    text-shadow: 1px 1px 20px #000000;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
  button:hover {
    border: solid #337FED 1px;
    background: #1E62D0;
    background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
    background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
    background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
    background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-decoration: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

/**
 * Modal
 * @returns Component
 */
const Modal = ({ showModal, children, setShowModal }) => {
  const modalRef = useRef();

  // creates the animation when a modal opens
  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'lattranseY(0%)' : 'translateY(-40px)'
  });

  // modal handler
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // esc key press to close the modal
  const escPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  // adds event listener to the modal
  useEffect(
    () => {
      document.addEventListener('keydown', escPress);
      return () => document.removeEventListener('keydown', escPress);
    },
    [escPress]
  );

  if (!showModal) return null;
  return (
    <>
      <Background onClick={closeModal} ref={modalRef}>
        <animated.div style={animation}>
          <MaintenanceModalWrapper showModal={showModal}>
            <ModalContent>
              <div>{children}</div>
            </ModalContent>
            <CloseModalButton
              data-testid="close-modal-test"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </MaintenanceModalWrapper>
        </animated.div>
      </Background>
    </>
  );
};

export default Modal;
