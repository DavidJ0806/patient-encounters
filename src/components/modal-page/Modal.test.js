import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Modal from './Modal';

const mockSetState = jest.fn();
it('Modal renders', () => {
  const showModal = true;
  render(<Modal showModal={showModal} setShowModal={mockSetState}><p>Modal</p></Modal>);
  const modalText = screen.getByText(/modal/i);
  expect(modalText).toBeInTheDocument();
});

it('Modal closes', () => {
  const showModal = true;
  render(<Modal showModal={showModal} setShowModal={mockSetState}><p>Modal</p></Modal>);
  const modalCloseButton = screen.getByTestId('close-modal-test');
  fireEvent.click(modalCloseButton);
  expect(mockSetState).toHaveBeenCalledTimes(1);
});

it('does not show modal', () => {
  const showModal = false;
  render(<Modal showModal={showModal} setShowModal={mockSetState}><p>Modal</p></Modal>);
  const modalText = screen.queryByText(/modal/i);
  expect(modalText).toBeNull();
});

it('closes modal when pressing esc', () => {
  const showModal = true;
  render(<Modal showModal={showModal} setShowModal={mockSetState}><p>Modal</p></Modal>);
  fireEvent.keyDown(screen.queryByText(/modal/i), {
    key: 'Escape',
    code: 'Escape',
    keyCode: 27,
    charCode: 27
  });
  expect(mockSetState).toHaveBeenCalledTimes(1);
});
