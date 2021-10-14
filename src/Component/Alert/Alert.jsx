import * as React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
// import Stack from '@material-ui/lab/Stack';

export default function DescriptionAlerts({name}) {
    console.log('name : ',name);
  return (
    // <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
           You are now following  <strong>{name}</strong>
      </Alert>
    // </Stack>
  );
}