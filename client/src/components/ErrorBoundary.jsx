import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from '@material-ui/core';

export class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const hasError = !!this.state.error;

    return (
      <>
        <ErrorMessageDialog
          isOpen={hasError}
          onClose={() => this.setState({ error: null })}
        />

        {hasError ? <Redirect to="/" /> : this.props.children}
      </>
    );
  }
}


// ============================================================================
// ErrorMessageDialog
// ============================================================================

const ErrorMessageDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="error-message-dialog-title"
      aria-describedby="error-message-dialog-description"
    >
      <DialogTitle id="error-message-dialog-title">
        Error occured
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="error-message-dialog-description">
          <Box mt={1}>
            Please try again.
          </Box>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" size="small" color="primary" autoFocus>
          Try Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorBoundary;
