import * as React from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {FormControl, TextField, Select, MenuItem, InputLabel, Stack} from '@mui/material';
import {TransactionType, PaymentType} from './types/types';
import Box from '@mui/material/Box';
import {useState} from "react";
import CashInput from "./CashInput";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CreateItemPopup() {
    const [open, setOpen] = React.useState(false);
    const [transactionType, setTransactionType] = useState(TransactionType.Expense);
    const [paymentType, setPaymentType] = useState(PaymentType.Cash);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 2,
                    p: 2,
                }}>
                <Button variant="contained" onClick={handleClickOpen}>
                    Create New Entry
                </Button>
            </Box>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                    Create New Entry
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon/>
                </IconButton>
                <DialogContent dividers>
                    <Stack
                        component="form"          // makes it semantically a form
                        spacing={2}               // vertical gap between children (2 = 16px by default)
                        sx={{ maxWidth: 400, mx: 'auto', p: 3 }}  // center + padding optional
                    >
                        <CashInput/>
                        <FormControl fullWidth>
                            <InputLabel id="transaction-type-label">Transaction Type</InputLabel>
                            <Select
                                labelId="transaction-type-label"
                                id="transaction-type"
                                value={transactionType}
                                label="Transaction Type"
                                onChange={(e) => setTransactionType(e.target.value as TransactionType)}
                            >
                                <MenuItem value={TransactionType.Expense}>Expense</MenuItem>
                                <MenuItem value={TransactionType.Income}>Income</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="payment-type-label">Payment Type</InputLabel>
                            <Select
                                labelId="payment-type-label"
                                id="payment-type"
                                value={paymentType}
                                label="Payment Type"
                                onChange={(e) => setPaymentType(e.target.value as PaymentType)}
                            >
                                <MenuItem value={PaymentType.Cash}>Cash</MenuItem>
                                <MenuItem value={PaymentType.Check}>Check</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Create Entry
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}