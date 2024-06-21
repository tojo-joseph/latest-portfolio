import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean,
    closeSnackbar: any,
    message: string,
    severity: any
}
export default function SnackbarAlert(props: Props) {
    // const action = (
    //     <React.Fragment>
    //         {/* <IconButton
    //             size="small"
    //             aria-label="close"
    //             color="inherit"
    //             onClick={props.closeSnackbar}
    //         >
    //             <CloseIcon fontSize="small" />
    //         </IconButton> */}
    //         <Alert onClose={props.closeSnackbar} severity="success" sx={{ width: '100%' }}>
    //             This is a success message!
    //         </Alert>
    //     </React.Fragment>
    // );
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={props.open}
            autoHideDuration={6000}
            onClose={props.closeSnackbar}
        // message={props.message}
        // action={action}
        ><Alert onClose={props.closeSnackbar} severity={props.severity} sx={{ width: '100%' }}>
                {props.message}
            </Alert></Snackbar>
    );
}
