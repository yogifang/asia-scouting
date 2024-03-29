import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

export default function RadioGroup(props) {
  const { name, row ,label, value, onChange, items } = props;

  return (
    <FormControl variant="outlined">
      <FormLabel> {label} [</FormLabel>{' '}
      <MuiRadioGroup  row={row} name={name} value={value} onChange={onChange} >
        {' '}
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}{' '}
      </MuiRadioGroup>{' '}
    </FormControl>
  );
}
