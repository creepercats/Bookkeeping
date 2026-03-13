import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TransactionType, EntryData, PaymentType} from './types/types';


function createData(id: number, transactionType: TransactionType, paymentType: PaymentType, amount: number): EntryData {
    return {
        id,
        transactionType: transactionType,
        paymentType: paymentType,
        amount: amount
    };
}

const rows = [
    createData(1, TransactionType.Income, PaymentType.Cash, 100),
    createData(2, TransactionType.Expense, PaymentType.Check, 50),
]

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Transaction Type</TableCell>
                        <TableCell align="right">Payment Type</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.transactionType}</TableCell>
                            <TableCell align="right">{row.paymentType.toString()}</TableCell>
                            <TableCell align="right"
                                       style={row.transactionType === TransactionType.Income ? {color: 'green'} : {color: "red"}}>{"$" + row.amount.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}