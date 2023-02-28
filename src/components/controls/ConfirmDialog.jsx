import React from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Title } from '@mui/icons-material'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { DialogActions } from '@mui/material'
import Controls from './Controls'

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    DialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '&.MuiSvgIcon-root': {
            fontSize: '8rem',
        }

    }
}
))

const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
    const classes = useStyles()


    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {ConfirmDialog.Title}
                </Typography>
                <Typography variant='subtitle2'>
                    {ConfirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.DialogAction}>
                <Controls.Button
                    text='No'
                    color='default'
                    onClick={() => {
                        setConfirmDialog({
                            ...confirmDialog,
                            isOpen: false,
                        })
                    }}
                />
                <Controls.Button
                    text='Yes'
                    color='Secondary'
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog