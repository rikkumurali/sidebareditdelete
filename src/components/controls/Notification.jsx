import { makeStyles, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import { Alert } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9)
    }
}))

const Notification = ({ notify, setNotify }) => {
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }


        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (

        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
        >
            <Alert
                severity={notify.type}
                onClose={handleClose}
            >

                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification