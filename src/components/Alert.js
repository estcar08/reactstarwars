import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useContext } from 'react';
import { Context } from "../App";
import PropTypes from 'prop-types';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


CustomizedSnackbars.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default function CustomizedSnackbars(props) {
    const { type, text } = props;
    let { alert,handleAlert } = useContext(Context);

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={alert} autoHideDuration={6000} onClose={handleAlert}>
            {
                type === "success"?
                <Alert onClose={handleAlert} severity={type} sx={{ width: '100%' }}>
                    {text}
                </Alert>
                :
                <Alert onClose={handleAlert} severity={type} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            }
        </Snackbar>
        </Stack>
    );
}