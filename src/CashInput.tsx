import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const CurrencyInput = () => {
    const [value, setValue] = useState('');

    return (
        <NumericFormat
            value={value}
            customInput={TextField}
            onValueChange={(values) => {
                setValue(values.formattedValue);
            }}
            thousandSeparator=","
            decimalSeparator="."
            decimalScale={2}
            prefix="$"
            // Ensure the inputRef is handled correctly for custom inputs
            inputProps={{
                inputMode: 'numeric',
            }}
            label="Amount"
            variant="outlined"
        />
    );
};

export default CurrencyInput;