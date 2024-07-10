import { Modal as MuiModal, Box } from '@mui/material';
import React from 'react';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  header,
  body,
  footer,
}) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box className={'app-bg-white mx-28 my-10 p-4'}>
        {header && (
          <Box
            data-testid="modal-header"
            className={'p-4 border-b app-border-gray'}
          >
            {header}
          </Box>
        )}
        {body && (
          <Box
            data-testid="modal-body"
            className={'p-4 border-b app-border-gray'}
          >
            {body}
          </Box>
        )}
        {footer && (
          <Box data-testid="modal-footer" className={'p-4'}>
            {footer}
          </Box>
        )}
      </Box>
    </MuiModal>
  );
};

export default Modal;
