import React from 'react';
import {createRoot} from 'react-dom/client';
import Table from "./BasicTable"
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CreateItemPopup from './CreateItemPopup';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const root = createRoot(document.body);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Table/>
        <CreateItemPopup/>
    </ThemeProvider>
);